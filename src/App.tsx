import { Col, Row } from 'antd'
import { Suspense, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import userApi from './api/userApi'
import './App.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import AdminPage from './pages/Admin'
import { userState } from './recoil/userState'
import { ROOT_ROUTE } from './routes/root.route'

function App() {
    const [user, setUser] = useRecoilState(userState)

    const token: string = localStorage.getItem('token') || ''
    const _id: string = localStorage.getItem('_id') || ''

    const getUser = async (_id: string) => {
        try {
            const response = await userApi.getUserDetail(_id)
            setUser({ isLogin: true, ...response })
        } catch (error: any) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (token && _id) {
            getUser(_id)
        }
    }, [])

    return (
        <div className="app">
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    {user.isLogin ? (
                        <Routes>
                            <Route path="*" element={<Navigate to="/admin" />} />
                            <Route key={'admin'} path={'/admin/*'} element={<AdminPage />} />
                        </Routes>
                    ) : (
                        <Row justify="center">
                            <Col xs={18}>
                                <Header />
                                <Routes>
                                    <Route path="*" element={<Navigate to="/home" />} />
                                    {ROOT_ROUTE.map((prop, index) => (
                                        <Route key={index} {...prop} />
                                    ))}
                                </Routes>
                                <Footer />
                            </Col>
                        </Row>
                    )}
                </BrowserRouter>
            </Suspense>
        </div>
    )
}

export default App
