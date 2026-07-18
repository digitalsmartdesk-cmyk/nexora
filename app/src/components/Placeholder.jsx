export default function Placeholder({ style, label, dark = false, children }) {
  const stripe = dark
    ? 'repeating-linear-gradient(135deg,#0B1F4B,#0B1F4B 14px,#12285F 14px,#12285F 28px)'
    : 'repeating-linear-gradient(135deg,#EAF1FF,#EAF1FF 8px,#F7F9FC 8px,#F7F9FC 16px)';
  return (
    <div
      style={{
        position: 'relative',
        background: stripe,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      {children}
      {label && (
        <span
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            fontFamily: "'Courier New',monospace",
            fontSize: 9,
            color: dark ? 'rgba(255,255,255,0.55)' : '#7C89A8',
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
