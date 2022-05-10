import React from 'react'

export default function AboutUsPage() {
    return (
        <div style={{ paddingTop: '10em' }}>
            <h1 style={{ fontWeight: 'bold' }}>Về chúng tôi</h1>
            <div>
                <p>
                    Chúng tôi là một nhóm tình nguyện viên, mục đích của chúng tôi là cung cấp các
                    cho mọi người các thông tin về các loài động thực vật ở Việt Nam. Với hy vọng
                    những kiến thức này sẽ giúp cho mọi người có góc nhìn tốt hơn về giá trị của các
                    loài động vât, giá trị của môi trường
                </p>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: 'min-content',
                        margin: 'auto`',
                    }}
                >
                    <img
                        src="https://media.istockphoto.com/photos/volunteers-wearing-masks-picture-id1320910670?b=1&k=20&m=1320910670&s=170667a&w=0&h=krHRikBMy4SL_K7FC9_xzQIdQRk9_xCr8s3SplwNbSw="
                        alt=""
                    />
                    <em style={{ textAlign: 'right' }}>Hình minh họa</em>
                </div>
            </div>
        </div>
    )
}
