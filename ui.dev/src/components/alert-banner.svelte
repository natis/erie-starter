<!-- for the high priority alert theme we need to add <high-priority> class below; ex: class="alert-banner high-priority show" -->
	<section class="alert-banner show" aria-label="alert-banner">
		<div class="margin-frame">
			<!-- add <single> class below if there is more than 1 message; ex: class="alert-banner-container single" -->
			<div class="alert-banner-container">
				<!-- show alert-banner-pagination only if there is more than 1 message -->
				<div class="alert-banner-pagination">
					<button class="alert-prev">
						<span class="sr-only">Previous Message</span>
					</button>
					<div class="alert-info">
						<span class="active-alert-number">1</span>
						<span><span class="sr-only">of</span> / </span>
						<!-- alert messages length -->
						<span class="total-alerts">3</span> 
					</div>
					<button class="alert-next">
						<span class="sr-only">Next Message</span>
					</button>
				</div>
				<div class="alert-banner-content">
					<!-- change aria-label for each message based on the current message and total number of messages -->
					<div class="alert-banner-message show" role="group" aria-label="message 1 of 4">
						<span class="alert-message">Order <a href="#">online</a> and save $5 on your next order of $35 with code <strong>SAVE5WITHUS</strong></span>
						<!-- show message CTA if available -->
						<a href="/" class="alert-message-cta">shop now</a>
					</div>
					<div class="alert-banner-message" role="group" aria-label="message 2 of 4">
						<span>This is an alert banner 2</span>
					</div>
					<div class="alert-banner-message" role="group" aria-label="message 3 of 4">
						<span>This is an alert banner 3</span>
					</div>
					<div class="alert-banner-message" role="group" aria-label="message 4 of 4">
						<span>This is an alert banner 4</span>
					</div>
				</div>
				<div class="close-banner-wrapper">
					<button class="alert-banner-close">
						<span class="sr-only">Close Banner</span>
					</button>
				</div>
			</div>
		</div>
	</section>