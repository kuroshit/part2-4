const SearchForm = ({handleInput}) => {
    return (
        <form>
            find countries <input onChange={handleInput} type="text" placeholder="Search..." />
        </form>
    );
}

export default SearchForm;