<section class="homepage-hero">
	<div class="component-frame">
		<div class="homepage-hero-content">
			<h1 class="homepage-headline">Insurance coverage <span class="focal-text">you can count on</span></h1>
			<p>Enjoy what makes your family happy, knowing that your home, investments, and cherished possessions are secure.</p>
			<form action="/" method="post" class="quote-wizard">
				<label>
					Insurance Type<br />
					<span class="select-frame">
						<select name="insurance-type">
							<option>Select</option>
							<option value="auto">Auto</option>
							<option value="home">Home</option>
							<option value="renters">Renters</option>
							<option value="life">Life</option>
							<option value="business">Business</option>
						</select>
					</span><!--/ select-frame -->
				</label>
				<label>
					Zip<br />
					<input type="text" name="zip-code" placeholder="Zip Code" />
				</label>
				<button type="submit" class="btn btn-primary arrow">Start a quote</button>
			</form><!-- /quote-wizard -->
			<nav class="user-actions">
				<p class="actions-headline">Already a customer?</p>
				<ul>
					<li><a href="/">Log in</a></li>
					<li><a href="/">Pay my bill</a></li>
					<li><a href="/">Start a claim</a></li>
					<li><a href="/">Get roadside assistance</a></li>
				</ul>
			</nav>
		</div><!-- /homepage-hero-content -->
		<picture>
			<source media="(max-width: 750px)" srcset="/images/homepage-hero-mobile-fpo.webp" />
			<source media="(max-width: 1150px)" srcset="/images/homepage-hero-tablet-fpo.webp" />
			<img src="/images/homepage-hero-desktop-fpo.webp" width="608" height="810" />
		</picture>
	</div><!-- /component-frame -->
	<div class="accent-bar"></div><!--/accent-bar -->
</section><!--/ homepage-hero -->