import './App.css'
import avatar from './assets/avatar.png'
import followersIcon from './assets/icon-followers.png'
import projectsIcon from './assets/icon-projects.png'
import likesIcon from './assets/icon-likes.png'
import { useState } from 'react'

function App() {
	// states
	const [isFollowing, setIsFollowing] = useState(false)

	return (
		<main>
			<section className="card">
				<img
					src={avatar}
					alt="Olivia Carter"
					className="card__avatar"
				/>
				<h2 className="card__name">Olivia Carter</h2>
				<p className="card__role">UI/UX Designer</p>
				<p className="card__bio">
					I design clean, user-friendly experiences that make a
					difference. 💜
				</p>

				<div className="card__divider"></div>

				<div className="card__stats">
					<div className="card__stat">
						<img
							src={followersIcon}
							alt=""
							className="card__stat-img"
						/>
						<p className="card__stat-stat">128</p>
						<p className="card__stat-tag">Followers</p>
					</div>
					<div className="card__divider--vertical"></div>
					<div className="card__stat">
						<img
							src={projectsIcon}
							alt=""
							className="card__stat-img"
						/>
						<p className="card__stat-stat">24</p>
						<p className="card__stat-tag">Projects</p>
					</div>
					<div className="card__divider--vertical"></div>
					<div className="card__stat">
						<img
							src={likesIcon}
							alt=""
							className="card__stat-img"
						/>
						<p className="card__stat-stat">312</p>
						<p className="card__stat-tag">Likes</p>
					</div>
				</div>

				<button
					className="card__button"
					onClick={() => setIsFollowing(!isFollowing)}>
					{isFollowing ? 'Unfollow' : '+ Follow'}
				</button>
			</section>
		</main>
	)
}

export default App
