export default function CountryCard({country}) {
  return (
    <div>
      <h1> {country.name.common}</h1>
      <p> {country.capital} </p>
    </div>
  )
}
