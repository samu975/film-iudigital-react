const Filters = () => {
  return (
    <div className="bg-neutral-900 c-grid">
      <div className="d-flex flex-column flex-row@lg align-items-center py-4">
        <div className="d-flex flex-wrap flex-nowrap@lg order-first@lg w-full w-auto@lg">
          <div className="c-dropdown d-inline-block d-block d-inline-block@md mb-3 mb-3@md mb-0@lg mr-0 mr-3@lg filter-type">
            <button type="button" color="default" className="dp-3 c-button c-button--lg c-button--block c-button--default">
              Películas
            </button>
          </div>
          <div className="c-dropdown d-block d-inline-block@md filter-genre">
          <button type="button" color="default" className="dp-3 c-button c-button--lg c-button--block c-button--default">
            Todos los géneros
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filters
