import { FaYoutube, FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-5 md:flex-row justify-between items-center">
        <div className="text-gray-700 dark:text-gray-100 text-center">
<p>
©Company Name
</p>
        <p className='text-sm font-semibold'>@All right reserver</p>
        </div>
        <div className="flex flex-row space-x-5">
          <a aria-label="Programming with Mosh YouTube Channel" 
          href="https://www.youtube.com/" target="_blank">
            <FaYoutube className="text-violet-500 dark:text-white" size={20} />
          </a>
          <a aria-label="Mosh Hamedani's Twitter" href="https://twitter.com/" target="_blank">
            <FaTwitter className="text-violet-500 dark:text-white" size={20} />
          </a>
          <a aria-label="Programming with Mosh Facebook Page" href="https://www.facebook.com/" target="_blank">
            <FaFacebook className="text-violet-500 dark:text-white" size={20} />
          </a>
          <a aria-label="Code with Mosh on LinkedIn" href="https://www.linkedin.com/" target="_blank">
            <FaLinkedin className="text-violet-500 dark:text-white" size={20} />
          </a>
          <a aria-label="Code with Mosh on Instagram" href="https://www.instagram.com/" target="_blank">
            <FaInstagram className="text-violet-500 dark:text-white" size={20} />
          </a>
          <a aria-label="Code with Mosh on TikTok" href="https://www.tiktok.com" target="_blank">
            <FaTiktok className="text-violet-500 dark:text-white" size={20} />
          </a>
        </div>
        <div className="text-sm flex space-x-5">
          <a className="no-underline" href="/p/terms">Terms of Use</a>
          <a className="no-underline" href="/p/privacy">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
