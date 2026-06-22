const SectionHeader = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`max-w-2xl mx-auto mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-sena-dark mb-4">{title}</h2>
      {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
      <div className="w-20 h-1 bg-sena-green mx-auto mt-4"></div>
    </div>
  );
};

export default SectionHeader;