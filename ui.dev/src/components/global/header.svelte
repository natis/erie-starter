<script>
	export let pageType;
</script>
<header class="{pageType}">
	<div class="header-frame">
		<a href="/" class="header-logo"><span class="sr-only">ERIE Insurance</span></a>
		<nav>
			<ul class="main-nav">
				<li class="mobile-only mobile-search">
					<form action="/" method="post" class="mobile-search">
						<div class="animated-labels">
							<label for="search" class="animated-label">What are you looking for?</label>
							<input type="search" id="search" name="search" />
						</div>
						<button type="submit" class="search-submit">
							<span class="sr-only">Search</span>
							<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="image" class="mobile-only">
								<title>Icon for Search</title>
								<g transform="translate(4 4)" stroke="#002955" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round">
									<circle cx="6.5" cy="6.5" r="6.5"/>
									<path d="m11.5 11.5 4.243 4.243"/>
								</g>
							</svg><!-- /mobile-only -->
						</button><!--/submit-search -->
					</form><!-- /component-frame -->
				</li>
				<li class="has-sub">
					<a href="/">Insurance</a>
					<button class="sub-menu-toggle">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
							</path>
						</svg>
						<span class="sr-only">Toggle sub menu</span>
					</button>
					<div class="submenu">
						<button class="sub-menu-back">
							<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="presentation">
								<title>Arrow pointing left</title>
								<g stroke="#002955" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
									<path d="m10 7-5 5 5 5M19 12H6"/>
								</g>
							</svg>
							Back
						</button><!-- /sub-menu-back -->
						<div class="mobile-nav-header">Insurance</div>
						<div class="submenu-frame">
							<ul class="insurance-options">
								<li class="vehicle">
									<div class="group-title">Vehicle</div>
									<ul>
										<li><a href="/">Auto</a></li>
										<li><a href="/">Motorcycle</a></li>
										<li><a href="/">Antique & Classic Car</a></li>
										<li><a href="/">RV</a></li>
										<li><a href="/">Boat</a></li>
										<li><a href="/">Off-Road</a></li>
									</ul>
								</li><!-- /vehicle-->
								<li class="property">
									<div class="group-title">Property</div>
									<ul>
										<li><a href="/">Homeowners</a></li>
										<li><a href="/">Renters</a></li>
										<li><a href="/">Condo</a></li>
										<li><a href="/">Mobile Home</a></li>
										<li><a href="/">Landlord</a></li>
									</ul>
								</li><!-- /vehicle -->
								<li class="life">
									<div class="group-title">Life & Other</div>
									<ul>
										<li><a href="/">Life Insurance</a></li>
										<li><a href="/">ERIExpress</a></li>
										<li><a href="/">Term Life</a></li>
										<li><a href="/">Universal Life</a></li>
										<li><a href="/">Whole Life</a></li>
										<li><a href="/">Medicare Supplement</a></li>
										<li><a href="/">Retirement</a></li>
									</ul>
								</li><!-- /life-->
								<li class="savings">
									<div class="group-title">Smart Savings</div>
									<ul>
										<li><a href="/">Bundles</a></li>
										<li><a href="/">Discounts</a></li>
										<li><a href="/">YourTurn<sup>®</sup> Rewards Program</a></li>
									</ul>
								</li><!-- /savings -->
								<li class="aux-menu">
									<div class="group-title alt-title">Business</div>
									<ul>
										<li>
											<a href="/" class="group-category">By Industry</a>
											<ul>
												<li><a href="/">Retailers</a></li>
												<li><a href="/">Manufactuters</a></li>
												<li><a href="/">Wholesaler & Distributor</a></li>
												<li><a href="/" class="more-categories">See all industries</a></li>
											</ul>
										</li>
										<li>
											<a href="/" class="group-category">By Product</a>
											<ul>
												<li><a href="/">Commercial Property</a></li>
												<li><a href="/">Risk Control Services</a></li>
												<li><a href="/">Workers' Compensation</a></li>
												<li><a href="/">Commercial & Contract Bonds</a></li>
												<li><a href="/" class="more-categories">See all business products</a></li>
											</ul>
										</li>
									</ul>
								</li><!-- /aux-menu-->
								<li class="all-insurance">
									<a href="/" class="btn menu-btn arrow">View all insurance</a>
								</li><!-- /all-insurance-->
							</ul>
						</div><!-- /submenu-frame-->
					</div><!-- /submenu-->
				</li><!-- /has-sub -->
				<li class="has-sub">
					<a href="/">Resources</a>
					<button class="sub-menu-toggle">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
							</path>
						</svg>
						<span class="sr-only">Toggle sub menu</span>
					</button>
					<div class="submenu">
						<button class="sub-menu-back">
							<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="presentation">
								<title>Arrow pointing left</title>
								<g stroke="#002955" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
									<path d="m10 7-5 5 5 5M19 12H6"/>
								</g>
							</svg>
							Back
						</button><!-- /sub-menu-back -->
						<div class="mobile-nav-header">Resources</div>
						<div class="submenu-frame alternate">
							<ul>
								<li>
									<div class="group-title">Explore</div>
									<ul>
										<li><a href="/">Blog</a></li>
										<li><a href="/">Education</a></li>
										<li><a href="/">Tools</a></li>
									</ul>
								</li>
							</ul>
							<ul class="aux-menu">
								<li>
									<div class="group-title alt-title">Featured</div>
									<ul class="featured-cards">
										<li>
											<a href="/">
												<img src="http://fpoimg.com/170x108?text=Thumbnail&bg_color=e95385&text_color=ffffff" width="170" height="108" />
												Livin' the dream is better with a bundle
											</a>
										</li>
										<li>
											<a href="/">
												<img src="http://fpoimg.com/170x108?text=Thumbnail&bg_color=e95385&text_color=ffffff" width="170" height="108" />
												ERIE's support makes direct impact on kids' futures
											</a>
										</li>
										<li>
											<a href="/">
												<img src="http://fpoimg.com/170x108?text=Thumbnail&bg_color=e95385&text_color=ffffff" width="170" height="108" />
												ERIE tools & calculators to help you find the right coverage for you
											</a>
										</li>
									</ul><!-- /featured-cards-->
								</li>
							</ul><!-- /aux-menu -->
						</div><!-- /submenu-frame-->
					</div><!-- /submenu-->
				</li><!-- /has-sub -->
				<li class="has-sub">
					<a href="/">Help & Support</a>
					<button class="sub-menu-toggle">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
							</path>
						</svg>
						<span class="sr-only">Toggle sub menu</span>
					</button>
					<div class="submenu">
						<button class="sub-menu-back">
							<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="presentation">
								<title>Arrow pointing left</title>
								<g stroke="#002955" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
									<path d="m10 7-5 5 5 5M19 12H6"/>
								</g>
							</svg>
							Back
						</button><!-- /sub-menu-back -->
						<div class="mobile-nav-header">Help & Support</div>
						<div class="submenu-frame alternate">
							<ul>
								<li>
									<div class="group-title">How Can We Help</div>
									<ul>
										<li><a href="/">Support Center</a></li>
										<li><a href="/">Find an Agency</a></li>
										<li><a href="/">Contact ERIE</a></li>
									</ul>
								</li>
							</ul>
							<ul class="aux-menu alternate">
								<li>
									<div class="group-title alt-title">I want to</div>
									<ul class="icon-cards">
										<li>
											<a href="/">
												<span class="icon-primary">
													<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img">
														<title>Icon for Get a Quote</title>
														<g fill="none" fill-rule="evenodd">
															<path d="M42.73 29.523v-6.786c0-1.622-1.328-2.937-2.964-2.937H22.764c-1.637 0-2.964 1.315-2.964 2.937v17.639c0 1.622 1.327 2.936 2.964 2.936h6.182M25.08 25.686h12.217M25.08 31.063h12.217M25.08 36.228h6.973" stroke="#002955" stroke-linecap="round" stroke-linejoin="round"/>
															<path d="m36.148 44.93 9.06-8.976a.648.648 0 0 0 0-.922l-2.425-2.401a.662.662 0 0 0-.93 0l-9.064 8.982a.65.65 0 0 0-.188.38l-.337 2.675a.655.655 0 0 0 .72.729l2.766-.28a.66.66 0 0 0 .398-.187z" stroke="#002955"/>
														</g>
													</svg>														
												</span><!-- /icon -->
												Get a quote
											</a>
										</li>
										<li>
											<a href="/">
												<span class="icon-primary">
													<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img">
														<title>Icon for Start a Claim</title>
														<g fill="none" fill-rule="evenodd">
															<g transform="translate(16 16)">
																<path d="M11 5.333H6.8a.8.8 0 0 0-.8.8v21.734a.8.8 0 0 0 .8.8h18.4a.8.8 0 0 0 .8-.8V6.133a.8.8 0 0 0-.8-.8H21" stroke="#4E5574" stroke-linecap="round" stroke-linejoin="round"/>
																<path stroke="#4E5574" stroke-linecap="round" d="M21.333 15.333H10.667M21.333 20.667H10.667"/>
																<rect stroke="#4E5574" stroke-linejoin="round" transform="rotate(180 16 5.333)" x="11.333" y="3.333" width="9.333" height="4" rx=".8"/>
															</g>
														</g>
													</svg>
												</span><!-- /icon -->
												Start a claim
											</a>
										</li>
										<li>
											<a href="/">
												<span class="icon-primary">
													<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img">
														<g fill="none" fill-rule="evenodd">
															<path d="M28.503 38.29a4.247 4.247 0 0 0-.08-.051V25.76c1.162-.711 1.935-1.959 1.935-3.38 0-1.422-.773-2.67-1.936-3.381v1.524c0 1.189-1.004 2.152-2.243 2.152h0c-1.24 0-2.244-.963-2.244-2.152V19C22.772 19.712 22 20.96 22 22.38c0 1.422.772 2.67 1.935 3.381V38.24C22.772 38.95 22 40.198 22 41.619c0 1.422.772 2.67 1.935 3.381v-1.524c0-1.189 1.005-2.152 2.244-2.152h0c1.239 0 2.243.963 2.243 2.152V45c1.163-.712 1.936-1.96 1.936-3.38 0-1.39-.737-2.612-1.855-3.33M40.797 45h-5.85c-.408 0-.738-.268-.738-.598v-9.55c0-.14.14-.252.31-.252h6.705c.172 0 .31.113.31.252v9.55c0 .33-.33.598-.737.598" stroke="#002955" stroke-linecap="round" stroke-linejoin="round"/>
															<path d="M35.183 34.248v-1.42c0-.457.184-.828.411-.828h4.41c.227 0 .412.37.412.828v1.42" stroke="#002955"/>
															<path stroke="#002955" stroke-linecap="round" stroke-linejoin="round" d="M39.296 31.749v-9.422l.47-.568L39.332 19h-2.603l-.45 2.757.486.486v9.506"/>
														</g>
													</svg>
													
												</span><!-- /icon -->
												Find a repair shop
											</a>
										</li>
										<li>
											<a href="/">
												<span class="icon-primary">
													<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img">
														<g fill="none" fill-rule="evenodd">
															<path d="M43.435 37h-14.87C27.7 37 27 36.284 27 35.4v-8.8c0-.884.7-1.6 1.565-1.6h14.87C44.3 25 45 25.716 45 26.6v8.8c0 .884-.7 1.6-1.565 1.6z" stroke="#002955"/>
															<path d="M28 43a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" stroke="#002955"/>
															<path stroke="#002955" stroke-linecap="round" d="M25 20.5h4"/>
															<path d="M36 36.667v7A2.326 2.326 0 0 1 33.682 46H21.318A2.326 2.326 0 0 1 19 43.667V20.333A2.326 2.326 0 0 1 21.318 18h12.364A2.326 2.326 0 0 1 36 20.333V25" stroke="#002955"/>
														</g>
													</svg>
												</span><!-- /icon -->
												Make a payment
											</a>
										</li>
										<li>
											<a href="/">
												<span class="icon-primary">
													<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img">
														<g fill="none" fill-rule="evenodd">
															<g stroke="#002955">
																<path stroke-linecap="round" stroke-linejoin="round" d="M31 19.8h4"/>
																<path d="M41 43.667A2.326 2.326 0 0 1 38.682 46H26.318A2.326 2.326 0 0 1 24 43.667V20.333A2.326 2.326 0 0 1 26.318 18h12.364A2.326 2.326 0 0 1 41 20.333v23.334z"/>
																<path stroke-linecap="round" stroke-linejoin="round" d="M32.5 25.5v7M30 30l2.5 3 2.5-3M29.5 35.5h6"/>
																<path stroke-linecap="square" d="M24.5 21.5h16M24.5 40.5h16"/>
															</g>
														</g>
													</svg>
												</span><!-- /icon -->
												Download Mobile App
											</a>
										</li>
									</ul><!-- /featured-cards-->
								</li>
							</ul><!-- /aux-menu -->
						</div><!-- /submenu-frame-->
					</div><!-- /submenu-->
				</li><!-- /has-sub -->
				<li class="has-sub">
					<a href="/">Why ERIE Agents</a>
					<button class="sub-menu-toggle">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
							</path>
						</svg>
						<span class="sr-only">Toggle sub menu</span>
					</button>
					<div class="submenu">
						<button class="sub-menu-back">
							<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="presentation">
								<title>Arrow pointing left</title>
								<g stroke="#002955" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
									<path d="m10 7-5 5 5 5M19 12H6"/>
								</g>
							</svg>
							Back
						</button><!-- /sub-menu-back -->
						<div class="mobile-nav-header">Why ERIE Agents</div>
						<div class="submenu-frame alternate">
							<ul>
								<li>
									<div class="group-title">Our Network</div>
									<ul>
										<li><a href="/">About ERIE Agents</a></li>
										<li><a href="/">Find an Agency</a></li>
										<li><a href="/">Agencies by State</a></li>
										<li><a href="/">Become an ERIE Agent</a></li>
									</ul>
								</li>
							</ul>
							<ul class="aux-menu">
								<li>
									<div class="group-title alt-title">Featured</div>
									<ul class="featured-cards">
										<li>
											<a href="/">
												<img src="http://fpoimg.com/170x108?text=Thumbnail&bg_color=e95385&text_color=ffffff" width="170" height="108" />
												About ERIE
											</a>
										</li>
										<li>
											<a href="/">
												<img src="http://fpoimg.com/170x108?text=Thumbnail&bg_color=e95385&text_color=ffffff" width="170" height="108" />
												ERIE earns top ranking in the J.D. Power 2022 U.S. Independent Agent Satisfaction Study
											</a>
										</li>
										<li>
											<a href="/">
												<img src="http://fpoimg.com/170x108?text=Thumbnail&bg_color=e95385&text_color=ffffff" width="170" height="108" />
												How to become an insurance agent
											</a>
										</li>
									</ul><!-- /featured-cards-->
								</li>
							</ul><!-- /aux-menu -->
						</div><!-- /submenu-frame-->
					</div><!-- /submenu-->
				</li><!-- /has-sub -->
				<li class="has-sub">
					<a href="/">Company</a>
					<button class="sub-menu-toggle">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
							</path>
						</svg>
						<span class="sr-only">Toggle sub menu</span>
					</button>
					<div class="submenu">
						<button class="sub-menu-back">
							<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="presentation">
								<title>Arrow pointing left</title>
								<g stroke="#002955" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
									<path d="m10 7-5 5 5 5M19 12H6"/>
								</g>
							</svg>
							Back
						</button><!-- /sub-menu-back -->
						<div class="mobile-nav-header">Company</div>
						<div class="submenu-frame">
							<ul>
								<li>
									<div class="group-title">The ERIE Difference</div>
									<ul>
										<li><a href="/">About ERIE</a></li>
										<li><a href="/">Our History</a></li>
										<li><a href="/">Diversity, Equity, & Inclusion</a></li>
										<li><a href="/">The Giving Network</a></li>
									</ul>
								</li>
								<li>
									<div class="group-title">Work with Us</div>
									<ul>
										<li><a href="/">Careers</a></li>
										<li><a href="/">Internships</a></li>
										<li><a href="/">Become an ERIE Agent</a></li>
									</ul>
								</li>
								<li>
									<div class="group-title">Suppliers</div>
									<ul>
										<li><a href="/">Sourcing & Vendor Management</a></li>
										<li><a href="/">Supplier Diversity, Equity, & Inclusion</a></li>
									</ul>
								</li>
								<li>
									<div class="group-title">Investors</div>
									<ul>
										<li><a href="/">Newsroom</a></li>
										<li><a href="/">Investor Relations</a></li>
										<li><a href="/">Strategic Ventures</a></li>
									</ul>
								</li>
							</ul>
						</div><!-- /submenu-frame-->
					</div><!-- /submenu-->
				</li><!-- /has-sub -->
				<li class="mobile-nav-items">
					<a href="/" class="mobile-log-in">Log In</a>
					<a href="/" class="mobile-find-agency">Find an agency</a>
				</li><!-- /mobile-nav-items -->
			</ul><!-- /main-nav -->
		</nav>
		<section class="site-search">
			<button class="show-search">
				<span class="sr-only">Show Search</span>
				<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<g transform="translate(4 4)" stroke="#002955" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round">
						<circle cx="6.5" cy="6.5" r="6.5"/>
						<path d="m11.5 11.5 4.243 4.243"/>
					</g>
				</svg>					
			</button><!-- /show-search -->
			<div class="site-search-frame">
				<div  class="component-frame">
					<button class="close close-search">
						<span class="sr-only">Close Search</span>
						<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img">
							<title>Close Icon</title>
							<g stroke="#002955" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round">
								<path d="M18 6 6 18M6 6l12 12"/>
							</g>
						</svg>
					</button><!-- /close -->
					<form action="/" method="post">
						<div class="animated-labels">
							<label for="search" class="animated-label">What are you looking for?</label>
							<input type="search" id="search" name="search" />
						</div>
						<button type="submit" class="search-submit">
							<span class="btn btn-primary arrow desktop-only">Search</span>
							<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="image" class="mobile-only">
								<title>Icon for Search</title>
								<g transform="translate(4 4)" stroke="#002955" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round">
									<circle cx="6.5" cy="6.5" r="6.5"/>
									<path d="m11.5 11.5 4.243 4.243"/>
								</g>
							</svg><!-- /mobile-only -->
						</button><!--/submit-search -->
					</form><!-- /component-frame -->
				</div><!--/component-frame-->
			</div><!-- /search -->
		</section><!-- /site-search -->
		<a href="/" class="log-in">Log In</a><!--/log-in-->
		<div class="mobile-container">
			<a href="/" class="find-agency">Find an Agency</a><!-- /find-agency -->
			<button class="mobile-menu-toggle" aria-label="Menu">
				<span class="mobile-nav-toggle">
					<span></span>
					<span></span>
					<span></span>
				</span><!-- /mobile-nav-toggle-->
			</button><!--/mobile-menu-toggle-->
		</div><!--/mobile-container -->
	</div><!-- /header-frame -->
</header>