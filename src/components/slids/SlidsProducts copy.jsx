import React from 'react'
import { ContainerSlid } from './slidsProducts'

export default function SlidsProducts() {
  return (
    <>
			<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
				<div class="carousel-inner">
					<ContainerSlid>
						<div className="carousel-item active">
							<img src="BANNER02.png" className="d-block w-100" alt="img"/>
						</div>
						<div className="carousel-item">
							<img src="banner03.png" className="d-block w-100" alt="img"/>
						</div>
						<div className="carousel-item">
							<img src="bannerEletronico01.psd.gif" className="d-block w-100" alt="img"/>
						</div>
						<div className="carousel-item">
							<img src="banner01.png" className="d-block w-100" alt="img"/>
						</div>
						<div className="carousel-item">
							<img src="banner_0.gif" className="d-block w-100" alt="img"/>
						</div>
						<div className="carousel-item">
							<img src="banner03.gif" className="d-block w-100" alt="img"/>
						</div>
					</ContainerSlid>
				</div>
			</div>
    </>
  )
}
