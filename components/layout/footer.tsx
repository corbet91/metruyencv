import Image from "next/image"
import logo from '../../public/images/logo.png'

const Footer = () => {
    return <footer className='mt-5 p-5 text-center text-gray-500 border-t border-auto mx-auto max-w-screen-lg fixed bottom-0'>
        <div className='text-center'>Mê Truyện Chữ là nền tảng mở trực tuyến, miễn phí đọc truyện chữ được đóng góp nội dung từ các tác giả viết truyện và các dịch giả convert, dịch truyện, rất nhiều truyện hay và nổi bật được cập nhật nhanh nhất với đủ các thể loại tiên hiệp, kiếm hiệp, huyền ảo ... </div>
        <Image src={logo} alt='logo' className='w-16 h-16 mx-auto my-2' />
        <div className='flex flex-col space-y-2 sm:flex-row sm:justify-center sm:space-x-6 sm:space-y-0'>
            <a href="#" target="_blank">Điều khoản dịch vụ</a>
            <a href="#" target="_blank">Chính sách bảo mật</a>
            <a href="#" target="_blank">Về bản quyền</a>
            <a href="#" target="_blank">Hướng dẫn sử dụng</a>
        </div>
    </footer>
}
export default Footer