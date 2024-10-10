import './styles.css'

export function Button({ children }) {
  return (
    <div className="container-button">
      <button type="button">{children}</button>
    </div>
  )
}
