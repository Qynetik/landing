import Image from 'next/image'

const primary = '#001C35'

export default function HomePage() {
	return (
		<div className='min-h-screen flex flex-col bg-slate-950 text-slate-50'>
			{/* Top gradient bar */}
			<div
				className='h-1 w-full'
				style={{
					background:
						'linear-gradient(90deg, #001C35 0%, #114B8A 40%, #32C5FF 100%)',
				}}
			/>

			{/* Nav */}
			<header className='border-b border-white/5 bg-slate-950/80 backdrop-blur'>
				<div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-4'>
					<div className='flex items-center gap-3'>
						{/* Logo mark */}
						<div className='flex h-9 w-9 items-center justify-center'>
							<Image
								src='/q-logo.png'
								alt='Qynetik logo'
								width={32}
								height={32}
								className='h-7 w-7'
							/>
						</div>
						<span className='text-lg font-semibold tracking-tight'>
							Qynetik
						</span>
					</div>

					<span className='hidden text-xs font-medium text-slate-400 sm:inline'>
						Content in motion
					</span>
				</div>
			</header>

			{/* Main content */}
			<main className='flex-1'>
				<section className='border-b border-white/5 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900'>
					<div className='mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:py-20'>
						{/* Left: hero copy */}
						<div className='flex flex-col gap-6'>
							<div className='inline-flex items-center gap-2 self-start rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200'>
								<span className='h-1.5 w-1.5 rounded-full bg-emerald-400' />
								Private alpha · 2026
							</div>

							<h1 className='text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl'>
								Move content between CMSs
								<span className='block text-slate-300'>
									without breaking everything.
								</span>
							</h1>

							<p className='max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base'>
								Qynetik automates complex AEM → headless migrations with schema
								mapping, validation, and delta replays. Less custom scripts,
								fewer broken links, and migration runs you can actually trust.
							</p>

							{/* Bullets */}
							<ul className='mt-2 space-y-2 text-sm text-slate-200'>
								<li className='flex gap-2'>
									<span className='mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400' />
									<span>
										Export AEM content into a clean, inspectable graph.
									</span>
								</li>
								<li className='flex gap-2'>
									<span className='mt-1 h-1.5 w-1.5 rounded-full bg-sky-400' />
									<span>
										Map into headless models with reusable YAML presets.
									</span>
								</li>
								<li className='flex gap-2'>
									<span className='mt-1 h-1.5 w-1.5 rounded-full bg-amber-400' />
									<span>
										Validate links, redirects, assets, and locales pre-import.
									</span>
								</li>
								<li className='flex gap-2'>
									<span className='mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400' />
									<span>
										Run dry-runs and safe delta replays for every launch.
									</span>
								</li>
							</ul>

							{/* Email capture */}
							<div className='mt-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4 shadow-sm shadow-black/40 sm:p-5'>
								<p className='text-xs font-medium uppercase tracking-[0.18em] text-slate-400'>
									Early access
								</p>
								<p className='mt-1 text-sm text-slate-200'>
									Building or planning an AEM migration in 2026? Join the early
									access list and we&apos;ll reach out with a demo.
								</p>

								<form
									action='https://formspree.io/f/xldallqz'
									method='POST'
									className='mt-3 flex flex-col gap-2 sm:flex-row'
								>
									<input
										type='email'
										name='email'
										required
										placeholder='you@company.com'
										className='h-10 flex-1 rounded-lg border border-white/10 bg-slate-900 px-3 text-sm text-slate-50 placeholder:text-slate-500 outline-none ring-0 focus:border-emerald-400/70 focus:ring-1 focus:ring-emerald-400/40'
									/>
									<button
										type='submit'
										className='h-10 rounded-lg bg-emerald-500 px-4 text-sm font-medium text-slate-950 transition hover:bg-emerald-400'
									>
										Join waitlist
									</button>
								</form>

								<p className='mt-2 text-[11px] text-slate-500'>
									No spam, no shared lists — just an occasional email when
									Qynetik is ready for pilots.
								</p>
							</div>
						</div>

						{/* Right: “card” for agencies / use cases */}
						<div className='flex items-stretch'>
							<div className='relative w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.8)]'>
								<div className='mb-4 flex items-center justify-between gap-3'>
									<p className='text-xs font-semibold uppercase tracking-[0.2em] text-slate-400'>
										Built for
									</p>
									<span className='rounded-full bg-slate-900 px-2 py-1 text-[10px] font-medium text-slate-300'>
										Agencies · Digital teams
									</span>
								</div>

								<div className='space-y-3 text-sm text-slate-100'>
									<div className='rounded-xl border border-white/10 bg-slate-900/80 p-3'>
										<p className='text-xs font-semibold text-slate-400'>
											Agencies & SIs
										</p>
										<p className='mt-1 text-xs text-slate-200'>
											Stop reinventing migration scripts every project. Reuse
											mapping presets and validation rules across clients.
										</p>
									</div>

									<div className='rounded-xl border border-white/10 bg-slate-900/80 p-3'>
										<p className='text-xs font-semibold text-slate-400'>
											Enterprise digital leads
										</p>
										<p className='mt-1 text-xs text-slate-200'>
											De-risk your AEM re-platform with dry-runs, redirect
											coverage, and i18n checks before launch.
										</p>
									</div>

									<div className='rounded-xl border border-emerald-500/40 bg-emerald-500/5 p-3'>
										<p className='text-xs font-semibold text-emerald-300'>
											Design partner pilots
										</p>
										<p className='mt-1 text-xs text-emerald-100'>
											We&apos;re looking for a small number of partners to run
											focused pilots on real AEM trees in exchange for hands-on
											support and preferred pricing.
										</p>
									</div>
								</div>

								<div className='mt-4 flex items-center justify-between border-t border-white/5 pt-3'>
									<div className='text-[11px] text-slate-400'>
										<p>Migrations per year:</p>
										<p className='font-semibold text-slate-100'>
											AEM → headless
										</p>
									</div>
									<div className='rounded-full bg-slate-900 px-3 py-1 text-[11px] font-medium text-emerald-300'>
										Export · Map · Validate · Import · Delta
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer className='border-t border-white/5 bg-slate-950'>
				<div className='mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-5 text-[11px] text-slate-500 sm:flex-row sm:items-center'>
					<p>© {new Date().getFullYear()} Qynetik. All rights reserved.</p>
					<div className='flex flex-wrap items-center gap-3'>
						<span>Built by engineers who have shipped AEM at scale.</span>
					</div>
				</div>
			</footer>
		</div>
	)
}
