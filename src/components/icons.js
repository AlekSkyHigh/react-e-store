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

export const HomeIcon = ({ width, onClick }) => (
    <svg width={width} onClick={onClick} fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" fill="white"></path> <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" fill="white"></path>
    </svg>
);

export const CartIcon = ({ width, onClick }) => (
    <svg width={width} onClick={onClick} fill="currentColor" viewBox="0 0 24 24">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="white"></path>
    </svg>
  );
  