import { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FaCamera } from 'react-icons/fa';
import styles from './ProfileAvatar.module.scss';

const cx = classNames.bind(styles);

function ProfileAvatar({ avatarUrl, onChangeAvatar = () => {} }) {
  const fileInputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(avatarUrl);
  const [isUploading, setIsUploading] = useState(false);

  const handleClickCamera = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);
    setIsUploading(true);

    try {
      await onChangeAvatar(file);
    } catch (error) {
      console.error('❌ Upload avatar failed:', error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className={cx('avatar-container')}>
      <img
        src={previewUrl || 'https://i.imgur.com/0y0y0y0.png'}
        alt="avatar"
        className={cx('avatar')}
      />

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        hidden
      />

      <button
        type="button"
        className={cx('camera-icon')}
        title="Đổi ảnh đại diện"
        onClick={handleClickCamera}
        disabled={isUploading}
      >
        <FaCamera />
      </button>

      {isUploading && (
        <div className={cx('loading')}>Đang tải...</div>
      )}
    </div>
  );
}

export default ProfileAvatar;
