import React from 'react'
function PageShell({ children, title }) {
  return (
    <main className="page-shell">
      <div className="page-shell__card">
        {title && <div className="page-shell__title">{title}</div>}
        {children}
      </div>
    </main>
  )
}

export default PageShell;
