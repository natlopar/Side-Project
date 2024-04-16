// function FilteredRender() {

//     let filteredData = privateList;
//     if (casesOptionName !== '') {
//       filteredData = filteredData.filter(data => data.name.toLowerCase() === casesOptionName);
//     }
//     if (casesOptionBreed !== '') {
//       filteredData = filteredData.filter(data => data.breed.toLowerCase().includes(casesOptionBreed));
//     }
//     if (casesOptionClinic !== '') {
//       filteredData = filteredData.filter(data => data.clinical.toLowerCase().includes(casesOptionClinic));
//     }
//     return filteredData.length === 0 ? <NoFilter/> :

    
//   return (
//     <ul className="sectionList">
//      {
     
     
     
//      filteredData.map(data => (
//       <li key={data.idCase} className="sectionList__ul">
//         <Link to={`/case/${data.idCase}`} className='link'>
//           <UserCases data={data} idVet={idVet} />
//         </Link>
//       </li>))}
//   </ul>
//   )
// }

// export default FilteredRender