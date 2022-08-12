import React from 'react'
import './styles.css';

function TribesComponent() {
    return (
        <div className="d-flex flex-column column">
    <div className="panel panel-default">
      <div className="center-block fix-width scroll-inner">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>id</th>
              <th>Tribe</th>
              <th>Department</th>
              <th>Office</th>
              <th>id</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Internstellar</td>
              <td>Engineering</td>
              <td>Pipedrive Tallinn</td>
              <th>1</th>
              <th>Summer School</th>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>GhostBusters</td>
              <td>Software Testing</td>
              <td>Pipedrive Tartu</td>
              <th>2</th>
              <th>Testing software to get it market ready</th>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Market Monsters</td>
              <td>Marketing</td>
              <td>Pipedrive Lisbon</td>
              <th>3</th>
              <th>In charge of all marketing operations</th>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>PeoplePeople</td>
              <td>HR</td>
              <td>Home Office</td>
              <th>4</th>
              <th>In charge of finding and hiring people</th>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
      </div>
 )
}

export default TribesComponent;