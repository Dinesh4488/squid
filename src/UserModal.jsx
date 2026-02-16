import React from 'react';
import Modal from './Modal';

const UserModal = ({ user, onClose }) => {
  return (
    <Modal isOpen={Boolean(user)} onClose={onClose} title={user?.name} labelledBy="user-modal-title">
      {user && (
        <div>
          <div><strong>Username:</strong> {user.username}</div>
          <div><strong>Email:</strong> {user.email}</div>
          <div><strong>Phone:</strong> {user.phone}</div>
          <div><strong>Website:</strong> {user.website}</div>

          <div style={{ marginTop: 8 }}>
            <strong>Company:</strong>
            <div>{user.company?.name}</div>
            <div style={{ fontSize: 13, color: '#9ca3af' }}>{user.company?.catchPhrase}</div>
          </div>

          <div style={{ marginTop: 8 }}>
            <strong>Address:</strong>
            <div style={{ fontSize: 13 }}>{user.address?.suite}, {user.address?.street}, {user.address?.city} — {user.address?.zipcode}</div>
          </div>

        </div>
      )}
    </Modal>
  );
};

export default UserModal;
