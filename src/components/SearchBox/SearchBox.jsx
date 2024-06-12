// import css from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
export default function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleFilter = e => dispatch(changeFilter(e.target.value.trim()));

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={filter}
        onChange={handleFilter}
        placeholder="Search..."
      />
    </div>
  );
}
