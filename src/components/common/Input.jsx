const Input = ({ label, type = "text", name, value, onChange, required = false, textarea = false }) => {
  const base = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sena-green focus:border-transparent outline-none transition";
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label} {required && "*"}</label>
      {textarea ? (
        <textarea rows={4} name={name} value={value} onChange={onChange} className={base} required={required}></textarea>
      ) : (
        <input type={type} name={name} value={value} onChange={onChange} className={base} required={required} />
      )}
    </div>
  );
};

export default Input;