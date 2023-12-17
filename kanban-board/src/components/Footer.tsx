import { NavLink } from "react-router-dom";

function Footer() {
	return (
		<section className="relative overflow-hidden bg-gray-900 text-white py-[10px] h-[7vh]">
			<div className="container relative z-10 mx-auto px-4">
				<div className="-m-8 flex flex-wrap items-center justify-between">
					<div className="w-auto p-8">
						<NavLink to="/">
							<div className="inline-flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="40"
									height="46"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
									/>
								</svg>
								<span className="ml-4 text-lg font-bold">
									DragBoard
								</span>
							</div>
						</NavLink>
					</div>
					<div className="w-auto p-8">
						<ul className="-m-5 flex flex-wrap items-center">
							<li className="p-5">
								<NavLink
									to="/about"
									className={({ isActive }) =>
										`block py-2 pr-4 pl-3 ${
											isActive
												? "text-blue-500"
												: "text-white-600"
										} duration-200 font-medium   hover:text-blue-200`
									}
								>
									About
								</NavLink>
							</li>
							{/*
								|
							<li className="p-5">
								<a
									className="font-medium text-white-600 hover:text-blue-200"
									href="#"
								>
									Contact
								</a>
							</li> */}
						</ul>
					</div>

					<div className="w-auto p-8">
						<div className="-m-1.5 flex flex-wrap">
							<div className="w-auto p-1.5">
								<a
									href="https://twitter.com/zha__sumit"
									target="_blank"
								>
									<div className="flex h-8 w-8 items-center justify-center ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											y="0px"
											width="100"
											height="100"
											viewBox="0 0 48 48"
										>
											<path
												fill="#03A9F4"
												d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
											></path>
										</svg>
									</div>
								</a>
							</div>
							<div className="w-auto p-1.5">
								<a
									href="mailto:sumitzha2057@gmail.com"
									target="_blank"
								>
									<div className="flex h-8 w-8 items-center justify-center ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="32"
											height="32"
											data-name="Layer 1"
											viewBox="0 0 32 32"
											id="gmail"
										>
											<path
												fill="#ea4435"
												d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z"
											></path>
											<path
												fill="#00ac47"
												d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z"
												transform="rotate(180 26.5 16)"
											></path>
											<path
												fill="#ffba00"
												d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z"
											></path>
											<path
												fill="#4285f4"
												d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z"
											></path>
											<path
												fill="#c52528"
												d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z"
											></path>
										</svg>
									</div>
								</a>
							</div>
							<div className="w-auto p-1.5">
								<a
									href="https://www.instagram.com/sumit__zha/"
									target="_blank"
								>
									<div className="flex h-8 w-8 items-center justify-center ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											y="0px"
											width="100"
											height="100"
											viewBox="0 0 48 48"
										>
											<radialGradient
												id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
												cx="19.38"
												cy="42.035"
												r="44.899"
												gradientUnits="userSpaceOnUse"
											>
												<stop
													offset="0"
													stop-color="#fd5"
												></stop>
												<stop
													offset=".328"
													stop-color="#ff543f"
												></stop>
												<stop
													offset=".348"
													stop-color="#fc5245"
												></stop>
												<stop
													offset=".504"
													stop-color="#e64771"
												></stop>
												<stop
													offset=".643"
													stop-color="#d53e91"
												></stop>
												<stop
													offset=".761"
													stop-color="#cc39a4"
												></stop>
												<stop
													offset=".841"
													stop-color="#c837ab"
												></stop>
											</radialGradient>
											<path
												fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
												d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
											></path>
											<radialGradient
												id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
												cx="11.786"
												cy="5.54"
												r="29.813"
												gradientTransform="matrix(1 0 0 .6663 0 1.849)"
												gradientUnits="userSpaceOnUse"
											>
												<stop
													offset="0"
													stop-color="#4168c9"
												></stop>
												<stop
													offset=".999"
													stop-color="#4168c9"
													stop-opacity="0"
												></stop>
											</radialGradient>
											<path
												fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
												d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
											></path>
											<path
												fill="#fff"
												d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
											></path>
											<circle
												cx="31.5"
												cy="16.5"
												r="1.5"
												fill="#fff"
											></circle>
											<path
												fill="#fff"
												d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
											></path>
										</svg>
									</div>
								</a>
							</div>
							<div className="w-auto p-1.5">
								<a
									href="https://www.facebook.com/profile.php?id=100016599376777"
									target="_blank"
								>
									<div className="flex h-8 w-8 items-center justify-center ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											y="0px"
											width="100"
											height="100"
											viewBox="0 0 48 48"
										>
											<path
												fill="#3f51b5"
												d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
											></path>
											<path
												fill="#fff"
												d="M29.368,24H26v12h-5V24h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H30v4h-2.287 C26.104,16,26,16.6,26,17.723V20h4L29.368,24z"
											></path>
										</svg>
									</div>
								</a>
							</div>
							<div className="w-auto p-1.5">
								<a
									href="https://www.linkedin.com/in/sumitzha/"
									target="_blank"
								>
									<div className="flex h-8 w-8 items-center justify-center ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											y="0px"
											width="100"
											height="100"
											viewBox="0 0 48 48"
										>
											<path
												fill="#0288D1"
												d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
											></path>
											<path
												fill="#FFF"
												d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
											></path>
										</svg>
									</div>
								</a>
							</div>
							<div className="w-auto p-1.5">
								<a
									href="https://discord.gg/p75n8u8D"
									target="_blank"
								>
									<div className="flex h-8 w-8 items-center justify-center ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											y="0px"
											width="100"
											height="100"
											viewBox="0 0 100 100"
										>
											<path
												fill="#78a2d2"
												d="M80.89,27.501c-10.11-7.714-19.728-7.5-19.728-7.5c-1.74,1.926-2.355,3.663-2.801,4.595	C55.728,24.21,52.946,24,50,24c-2.75,0-5.356,0.183-7.833,0.521c-0.313,0.043-1.142-2.641-3.33-4.52c0,0-9.618-0.214-19.728,7.5	c0,0-10.11,18.643-10.11,41.642c0,0,6.485,10.357,22,10.857l3-5c-1.956,0.378-5.068-2.292-4-5.848C34.856,71.1,41.716,73,50,73	c8.274,0,15.139-1.913,19.994-3.858C71.145,72.595,68.131,75.238,66,75l3,5c15.515-0.5,22-10.857,22-10.857	C91,46.143,80.89,27.501,80.89,27.501z M37.5,64c-4.687,0-8.5-4.479-8.5-9.983s3.813-9.983,8.5-9.983s8.5,4.479,8.5,9.983	S42.187,64,37.5,64z M62.5,64c-4.687,0-8.5-4.485-8.5-9.999s3.813-9.999,8.5-9.999s8.5,4.485,8.5,9.999S67.187,64,62.5,64z"
											></path>
											<ellipse
												cx="62.5"
												cy="54.001"
												fill="none"
												stroke="#000"
												stroke-linejoin="round"
												stroke-miterlimit="10"
												stroke-width="2"
												rx="7.5"
												ry="8.999"
											></ellipse>
											<ellipse
												cx="37.5"
												cy="54.017"
												fill="none"
												stroke="#000"
												stroke-linejoin="round"
												stroke-miterlimit="10"
												stroke-width="2"
												rx="7.5"
												ry="8.983"
											></ellipse>
											<path d="M69,81c-0.351,0-0.677-0.184-0.857-0.485l-3-5c-0.156-0.26-0.186-0.577-0.08-0.861c0.104-0.285,0.333-0.506,0.621-0.602 c0.118-0.039,0.288-0.084,0.496-0.137c0.873-0.223,2.498-0.637,3.061-1.749c0.23-0.456,0.272-1.027,0.125-1.706 C63.157,72.81,56.647,74,50,74c-6.681,0-13.198-1.189-19.391-3.537c-0.161,0.674-0.13,1.241,0.095,1.693 c0.552,1.111,2.209,1.529,3.1,1.754c0.216,0.054,0.392,0.1,0.512,0.14c0.288,0.096,0.517,0.317,0.621,0.602 c0.105,0.284,0.076,0.601-0.08,0.861l-3,5c-0.187,0.311-0.534,0.491-0.89,0.485C15.102,80.488,8.428,70.115,8.151,69.674 c-0.1-0.159-0.152-0.343-0.152-0.531c0-22.987,10.129-41.93,10.231-42.119c0.067-0.125,0.16-0.233,0.272-0.318 c10.269-7.836,19.946-7.715,20.356-7.705c0.231,0.005,0.453,0.09,0.629,0.241c1.564,1.344,2.467,3.008,3.006,4.001 c0.041,0.076,0.079,0.146,0.114,0.211c4.919-0.62,10.241-0.604,15.151,0.047c0.468-1.041,1.18-2.533,2.66-4.172 c0.185-0.204,0.445-0.323,0.72-0.329c0.409-0.009,10.087-0.132,20.356,7.705c0.112,0.085,0.205,0.194,0.272,0.318 C81.871,27.213,92,46.155,92,69.143c0,0.188-0.053,0.372-0.152,0.531C91.571,70.115,84.897,80.488,69.032,81 C69.021,81,69.011,81,69,81z M67.535,75.615l2.017,3.361c13.104-0.65,19.41-8.686,20.447-10.142 c-0.085-21.142-8.86-38.687-9.891-40.671c-8.445-6.369-16.577-7.077-18.499-7.154c-1.162,1.379-1.728,2.645-2.111,3.504 c-0.085,0.19-0.162,0.362-0.234,0.514c-0.189,0.395-0.61,0.622-1.048,0.558c-5.127-0.751-10.766-0.777-15.913-0.073 c-0.807,0.115-1.136-0.52-1.566-1.315c-0.438-0.809-1.151-2.123-2.277-3.19c-1.788,0.062-10.017,0.708-18.568,7.156 C18.861,30.15,10.085,47.715,10,68.835c1.037,1.456,7.343,9.492,20.447,10.142l2.015-3.358c-1.191-0.361-2.792-1.049-3.549-2.572 c-0.592-1.192-0.536-2.634,0.166-4.286c0.212-0.5,0.788-0.739,1.292-0.537C36.617,70.729,43.222,72,50,72 c6.75,0,13.352-1.274,19.622-3.787c0.511-0.206,1.093,0.042,1.299,0.554c0.672,1.663,0.707,3.11,0.104,4.302 C70.264,74.571,68.704,75.254,67.535,75.615z"></path>
											<path d="M42.877,29.472c-0.246,0-0.46-0.182-0.494-0.433c-0.037-0.274,0.154-0.526,0.428-0.563 c3.178-0.432,6.571-0.573,9.849-0.411c0.276,0.014,0.488,0.249,0.475,0.524c-0.013,0.276-0.239,0.487-0.523,0.475 c-3.217-0.158-6.547-0.02-9.665,0.403C42.923,29.47,42.899,29.472,42.877,29.472z"></path>
											<path d="M57.868,29.592c-0.025,0-0.051-0.002-0.077-0.006c-0.966-0.148-1.95-0.27-2.926-0.361c-0.274-0.026-0.477-0.27-0.451-0.545 c0.026-0.275,0.278-0.478,0.545-0.451c0.994,0.094,1.999,0.218,2.984,0.369c0.272,0.042,0.46,0.297,0.418,0.57 C58.323,29.416,58.11,29.592,57.868,29.592z"></path>
										</svg>{" "}
									</div>
								</a>
							</div>
							<div className="w-auto p-1.5">
								<a
									href="https://github.com/zhasumit"
									target="_blank"
								>
									<div className="flex h-8 w-8 items-center justify-center ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											y="0px"
											width="100"
											height="100"
											viewBox="0 0 48 48"
										>
											<circle
												cx="28"
												cy="28"
												r="18"
												fill="#9fa8da"
											></circle>
											<path
												fill="none"
												stroke="#18193f"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="3"
												d="M35.054,38.836	C31.97,41.137,28.144,42.5,24,42.5C13.783,42.5,5.5,34.217,5.5,24c0-2.917,0.675-5.676,1.878-8.13"
											></path>
											<path
												fill="none"
												stroke="#18193f"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="3"
												d="M13.869,8.518	C16.779,6.61,20.26,5.5,24,5.5c10.217,0,18.5,8.283,18.5,18.5c0,2.941-0.686,5.721-1.907,8.19"
											></path>
											<path
												fill="#18193f"
												d="M34,23c0-1.574-0.576-3.038-1.558-4.275c0.442-1.368,0.93-3.771-0.242-5.648	c-2.251,0-3.73,1.545-4.436,2.514C26.602,15.213,25.333,15,24,15s-2.602,0.213-3.764,0.591c-0.706-0.969-2.184-2.514-4.436-2.514	c-1.328,2.126-0.526,4.45-0.073,5.43C14.638,19.788,14,21.334,14,23c0,3.78,3.281,6.94,7.686,7.776	c-1.309,0.673-2.287,1.896-2.587,3.38h-1.315c-1.297,0-1.801-0.526-2.502-1.415c-0.692-0.889-1.437-1.488-2.331-1.736	c-0.482-0.051-0.806,0.316-0.386,0.641c1.419,0.966,1.516,2.548,2.085,3.583C15.168,36.161,16.229,37,17.429,37H19v5.942h10v-7.806	c0-1.908-1.098-3.544-2.686-4.36C30.719,29.94,34,26.78,34,23z"
											></path>
										</svg>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Footer;