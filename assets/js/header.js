import React from 'react'
import { Link, NavLink } from 'react-router-dom'

class Header extends React.Component {
	render() {
		return <nav className="navbar navbar-default navbar-fixed-top">
			<div className="container-fluid">
				<div className="navbar-header">
					<Link className="navbar-brand" to='/'>DogDogGo</Link>
				</div>
				<ul className="nav navbar-nav navbar-right">
					<li className="dropdown">
						<a className="dropdown-toggle" data-toggle="dropdown" href="#">Analytics
							<span className="caret"></span></a>
						<ul className="dropdown-menu">
							<li><a href='/sentimentanalytics' target="_blank" activeclassname='active'>Sentiment Time Series</a></li>
							<li><a href='/usageanalytics' target="_blank" activeclassname='active'>World Twitter Usage</a></li>
							<li><a href='/countryanalytics' target="_blank" activeclassname='active'>Country Time Series</a></li>
							<li><a href='/timeanalytics' target="_blank" activeclassname='active'>POI Time Series</a></li>
							<li><a href='/locanalytics' target="_blank" activeclassname='active'>Location Distribution</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</nav>
	}
}

export default Header
