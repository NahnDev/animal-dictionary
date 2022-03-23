import { Suspense } from 'react'
import { useRecoilValue } from 'recoil'
import { userState } from './recoil/userState'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.scss'
import { ROOT_ROUTE } from './routes/root.route'

import AnimalsPage from './pages/Admin'
import { Col, Row } from 'antd'
import Footer from './components/footer'
import Header from './components/Header'

function App() {
    const user = useRecoilValue(userState)
    return (
        <div className="app">
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    {user.isLogin ? (
                        <Row justify="center">
                            <Col xs={20}>
                                <Header />
                                <Routes>
                                    <Route path="*" element={<Navigate to="/admin" />} />
                                    <Route
                                        key={'admin'}
                                        path={'/admin'}
                                        element={<AnimalsPage />}
                                    />
                                </Routes>
                            </Col>
                        </Row>
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
