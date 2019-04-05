# TJTA330

## Repon kopiointi
1. Asenna Git (https://git-scm.com/).
2. Avaa terminaali/komentorivi ja navigoi hakemistoon, minne haluat lähdekoodit.
    Aja komento
    ```
    git clone https://github.com/swaniJK/TJTA330.git
    ```

## Frontend

ISMO:n frontend on nettiselaimessa toimiva JavaScript-applikaatio.

### Teknologiastack
- Ohjelmointikieli: TypeScript https://www.typescriptlang.org/
- UI-kirjasto: React https://reactjs.org/
- UI-framework: react-bootstrap https://react-bootstrap.github.io/

### Tarvittavat ohjelmistot

1. Node.js
https://nodejs.org/en/

### Frontendin ajaminen lokaalisti

1. Avaa komentorivi ja navigoi repon `Frontend`-hakemistoon.
2. Aja seuraavat komennot:
- `npm install`
- `npm run start`
3. ISMO löytyy nyt osoitteesta http://localhost:1234/. Jos teet muutoksia lähdekoodiin ja tallennat muutokset, muutosten pitäisi näkyä selainta päivittämällä.


## Backend

Backend on ASP.NET Core:lla tehty REST API.

### Teknologiastack
- Ohjelmointikieli: C# https://docs.microsoft.com/en-us/dotnet/csharp/
- Web-framework: ASP.NET Core 2.2 https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-2.2 
- ORM-framework: Entity Framework Core https://docs.microsoft.com/en-us/ef/core/
- Tietokanta: MS SQL Server 2017 https://www.microsoft.com/fi-fi/sql-server/sql-server-2017

### Tarvittavat ohjelmistot:
1. Visual Studio 2019/2017 https://visualstudio.microsoft.com/
2. .NET Core SDK 2.2 https://dotnet.microsoft.com/download
3. SQL Server Management Studio (valinnainen, tietokannan tarkasteluun) https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-2017