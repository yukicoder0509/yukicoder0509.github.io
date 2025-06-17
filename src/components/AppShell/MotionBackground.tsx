export default function MotionBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-400 opacity-50" />
            <div className="absolute inset-0 bg-blue-200 opacity-30 mix-blend-multiply" />
        </div>
    );
}
