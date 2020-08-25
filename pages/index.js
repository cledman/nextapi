import axios from 'axios';

const Index = ({dados}) => (
    <div>
        <h1>Países</h1>

        <ul>
            {dados.data.map(country => (
                <li key={country.country}>
                    {country.country}
                </li>
            ))}
        </ul>

    </div>
);

Index.getInitialProps = async () =>{
    const response = await axios.get(
        'https://covid19-brazil-api.now.sh/api/report/v1/countries'
    );

    return { dados:  response.data}
};

export default Index;
