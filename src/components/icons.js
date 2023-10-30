export const UpIcon = ({ width, onClick }) => (
    <svg width={width} onClick={onClick} fill="currentColor" viewBox="0 0 20 20" style={{ marginLeft: '24px' }}>
        <path d="M12 2a1 1 0 0 1 1 1v8h8a1 1 0 0 1 0 2h-8v8a1 1 0 0 1-2 0v-8H3a1 1 0 0 1 0-2h8V3a1 1 0 0 1 1-1z" />
    </svg>
);

export const DownIcon = ({ width, onClick }) => (
    <svg width={width} onClick={onClick} fill="currentColor" viewBox="0 0 20 20" style={{ marginLeft: '8px' }}>
        <path d="M4 12a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1z" />
    </svg>
);

export const TrashIcon = ({ width, onClick }) => (
    <svg width={width} onClick={onClick} fill="currentColor" viewBox="0 0 20 20" style={{ marginLeft: '24px' }}>
        <path d="M9 3a1 1 0 0 1 1 1V4h4a1 1 0 0 1 1 1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V3zm10 2h-4V4H9v1H5a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2zm1 14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v9zm-6-7a1 1 0 0 1 2 0v7a1 1 0 0 1-2 0v-7z" />
    </svg>
);
