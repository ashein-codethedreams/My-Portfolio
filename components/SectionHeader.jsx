export default function SectionHeader({ subtitle, title }) {
    return (
        <div className="section-header">
            <p className="section-subtitle">{subtitle}</p>
            <h2 className="section-title">{title}</h2>
            <div className="section-divider"></div>
        </div>
    );
}
