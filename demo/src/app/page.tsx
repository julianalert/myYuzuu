import { AnnouncementBadge } from '@/components/elements/announcement-badge'
import { BeforeAfterSlider } from '@/components/elements/before-after-slider'
import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button'
import { InstallCommand } from '@/components/elements/install-command'
import { Link } from '@/components/elements/link'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { Logo, LogoGrid } from '@/components/elements/logo-grid'
import { Main } from '@/components/elements/main'
import { Screenshot } from '@/components/elements/screenshot'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { GitHubIcon } from '@/components/icons/social/github-icon'
import { XIcon } from '@/components/icons/social/x-icon'
import { YouTubeIcon } from '@/components/icons/social/youtube-icon'
import { BrandCard, BrandsCardsMultiColumn } from '@/components/sections/brands-cards-multi-column'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { Faq, FAQsTwoColumnAccordion } from '@/components/sections/faqs-two-column-accordion'
import {
  Feature,
  FeaturesStackedAlternatingWithDemos,
} from '@/components/sections/features-stacked-alternating-with-demos'
import {
  FooterLink,
  FooterWithLinksAndSocialIcons,
  SocialLink,
} from '@/components/sections/footer-with-links-and-social-icons'
import { HeroCenteredWithDemo } from '@/components/sections/hero-centered-with-demo'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLogoActionsAndLeftAlignedLinks,
} from '@/components/sections/navbar-with-logo-actions-and-left-aligned-links'
import { Plan, PricingMultiTier } from '@/components/sections/pricing-multi-tier'
import { Stat, StatsWithGraph } from '@/components/sections/stats-with-graph'
import { TestimonialTwoColumnWithLargePhoto } from '@/components/sections/testimonial-two-column-with-large-photo'

export default function Page() {
  return (
    <>
      <NavbarWithLogoActionsAndLeftAlignedLinks
        id="navbar"
        logo={
          <NavbarLogo href="#">
            <img
              src="https://assets.tailwindplus.com/logos/oatmeal-instrument.svg?color=mist-950"
              alt="Oatmeal"
              className="dark:hidden"
              width={85}
              height={28}
            />
            <img
              src="https://assets.tailwindplus.com/logos/oatmeal-instrument.svg?color=white"
              alt="Oatmeal"
              className="not-dark:hidden"
              width={85}
              height={28}
            />
          </NavbarLogo>
        }
        links={
          <>
            {/* <NavbarLink href="#">Pricing</NavbarLink>
            <NavbarLink href="#">About</NavbarLink>
            <NavbarLink href="#">Docs</NavbarLink>
            <NavbarLink href="#" className="sm:hidden">
              Log in
            </NavbarLink> */}
          </>
        }
        actions={
          <>
            {/* <PlainButtonLink href="#" className="max-sm:hidden">
              Log in
            </PlainButtonLink> */}
            <ButtonLink href="#">Get started</ButtonLink>
          </>
        }
      />

      <Main>
        {/* Hero */}
        <HeroCenteredWithDemo
          id="hero"
          
          headline="AI Product Photos that you'll use on your PDPs"
          subheadline={
            <p>
              Ultra-realistic product & lifestyle photos for e-commerce. <br />Without hiring models or booking a studio. <br />
              Perfect for product pages, ads and social media.
            </p>
          }
          cta={
            <div className="flex items-center gap-4">
              <ButtonLink href="#" size="lg">
                Get started <ArrowNarrowRightIcon />
              </ButtonLink>

              
            </div>
          }
          demo={
            <>
              <Screenshot className="rounded-md lg:hidden" wallpaper="blue" placement="bottom-right">
                <div className="max-w-6xl mx-auto pb-4">
                  <BeforeAfterSlider
                    examples={[
                      {
                        beforeImage: 'img/products/beforeArea.png',
                        afterImage: 'img/products/afterArea.png',
                        beforeLabel: 'Before',
                        afterLabel: 'After',
                      },
                      {
                        beforeImage: 'img/products/noomiBefore.png',
                        afterImage: 'img/products/noomiAfter.png',
                        beforeLabel: 'Before',
                        afterLabel: 'After',
                      },
                      {
                        beforeImage: 'img/products/beforeLittleDutch.jpg',
                        afterImage: 'img/products/afterLittleDutch.png',
                        beforeLabel: 'Before',
                        afterLabel: 'After',
                      },
                    ]}
                  />
                </div>
              </Screenshot>
              <Screenshot className="rounded-lg max-lg:hidden" wallpaper="blue" placement="bottom">
                <div className="max-w-6xl mx-auto pb-4">
                  <BeforeAfterSlider
                    examples={[
                      {
                        beforeImage: 'img/products/beforeArea.png',
                        afterImage: 'img/products/afterArea.png',
                        beforeLabel: 'Before',
                        afterLabel: 'After',
                      },
                      {
                        beforeImage: 'img/products/noomiBefore.png',
                        afterImage: 'img/products/noomiAfter.png',
                        beforeLabel: 'Before',
                        afterLabel: 'After',
                      },
                      {
                        beforeImage: 'img/products/beforeLittleDutch.jpg',
                        afterImage: 'img/products/afterLittleDutch.png',
                        beforeLabel: 'Before',
                        afterLabel: 'After',
                      },
                    ]}
                  />
                </div>
              </Screenshot>
            </>
          }
          footer={
            <>
              {/* <LogoGrid>
                <Logo>
                  <img
                    src="https://assets.tailwindplus.com/logos/9.svg?color=black&height=32"
                    className="dark:hidden"
                    alt=""
                    width={51}
                    height={32}
                  />
                  <img
                    src="https://assets.tailwindplus.com/logos/9.svg?color=white&height=32"
                    className="not-dark:hidden"
                    alt=""
                    width={51}
                    height={32}
                  />
                </Logo>
                <Logo>
                  <img
                    src="https://assets.tailwindplus.com/logos/10.svg?color=black&height=32"
                    className="dark:hidden"
                    alt=""
                    width={70}
                    height={32}
                  />
                  <img
                    src="https://assets.tailwindplus.com/logos/10.svg?color=white&height=32"
                    className="not-dark:hidden"
                    alt=""
                    width={70}
                    height={32}
                  />
                </Logo>
                <Logo>
                  <img
                    src="https://assets.tailwindplus.com/logos/11.svg?color=black&height=32"
                    className="dark:hidden"
                    alt=""
                    width={100}
                    height={32}
                  />
                  <img
                    src="https://assets.tailwindplus.com/logos/11.svg?color=white&height=32"
                    className="not-dark:hidden"
                    alt=""
                    width={100}
                    height={32}
                  />
                </Logo>
                <Logo>
                  <img
                    src="https://assets.tailwindplus.com/logos/12.svg?color=black&height=32"
                    className="dark:hidden"
                    alt=""
                    width={85}
                    height={32}
                  />
                  <img
                    src="https://assets.tailwindplus.com/logos/12.svg?color=white&height=32"
                    className="not-dark:hidden"
                    alt=""
                    width={85}
                    height={32}
                  />
                </Logo>
                <Logo>
                  <img
                    src="https://assets.tailwindplus.com/logos/13.svg?color=black&height=32"
                    className="dark:hidden"
                    alt=""
                    width={75}
                    height={32}
                  />
                  <img
                    src="https://assets.tailwindplus.com/logos/13.svg?color=white&height=32"
                    className="not-dark:hidden"
                    alt=""
                    width={75}
                    height={32}
                  />
                </Logo>
                <Logo>
                  <img
                    src="https://assets.tailwindplus.com/logos/8.svg?color=black&height=32"
                    className="dark:hidden"
                    alt=""
                    width={85}
                    height={32}
                  />
                  <img
                    src="https://assets.tailwindplus.com/logos/8.svg?color=white&height=32"
                    className="not-dark:hidden"
                    alt=""
                    width={85}
                    height={32}
                  />
                </Logo>
              </LogoGrid> */}
            </>
          }
        />

        {/* Brands */}
        <BrandsCardsMultiColumn
          id="brands"
          eyebrow="Backed by the best"
          headline="Funded by leading investors."
          subheadline={
            <p>
              Oatmeal is backed by investors with decades of experience building the world's most boring and predictable
              B2B SaaS.
            </p>
          }
        >
          <BrandCard
            logo={
              <>
                <img
                  src="https://assets.tailwindplus.com/logos/15.svg?color=black&width=110"
                  className="dark:hidden"
                  alt=""
                  width={124}
                  height={32}
                />
                <img
                  src="https://assets.tailwindplus.com/logos/15.svg?color=white&width=110"
                  className="not-dark:hidden"
                  alt=""
                  width={124}
                  height={32}
                />
              </>
            }
            text="Focused capital for founders building the next generation of pyramid shaped businesses."
            footnote="Investor in Anomaly, Concise, Haptic and more."
          />
          <BrandCard
            logo={
              <>
                <img
                  src="https://assets.tailwindplus.com/logos/16.svg?color=black&width=120"
                  className="dark:hidden"
                  alt=""
                  width={146}
                  height={32}
                />
                <img
                  src="https://assets.tailwindplus.com/logos/16.svg?color=white&width=120"
                  className="not-dark:hidden"
                  alt=""
                  width={146}
                  height={32}
                />
              </>
            }
            text="Serving as a tax-efficiency vehicle for investors waiting to move to a tax haven."
            footnote="Investor in Quirk, Looply, Pine Labs and more."
          />
          <BrandCard
            logo={
              <>
                <img
                  src="https://assets.tailwindplus.com/logos/14.svg?color=black&width=80"
                  className="dark:hidden"
                  alt=""
                  width={106}
                  height={32}
                />
                <img
                  src="https://assets.tailwindplus.com/logos/14.svg?color=white&width=80"
                  className="not-dark:hidden"
                  alt=""
                  width={106}
                  height={32}
                />
              </>
            }
            text="Investing in potentially volatile bubble markets at an early stage."
            footnote="Investor in Artifact, Umbra, vivid.ai and more."
          />
        </BrandsCardsMultiColumn>

        {/* Testimonial */}
        <TestimonialTwoColumnWithLargePhoto
          id="testimonial"
          quote={
            <p>
              Ever since we started using Oatmeal, our customer satisfaction scores have skyrocketed. The personal touch
              that their human-AI hybrid support provides is unparalleled.
            </p>
          }
          img={
            <img
              src="https://assets.tailwindplus.com/avatars/16.webp?w=1400&h=1000"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={1400}
              height={1000}
            />
          }
          name="Lynn Marshall"
          byline="Founder at Pine Labs"
        />

        {/* FAQs */}
        <FAQsTwoColumnAccordion id="faqs" headline="Questions & Answers">
          <Faq
            id="faq-1"
            question="Isn't AI product photography obvious?"
            answer={
              <>
                <p>It usually is.</p>
                <p>That's the problem.</p>
                <p>
                  Most AI photos are over-polished, over-lit, and instantly feel fake.
                  My approach is the opposite: subtle, imperfect, believable.
                </p>
                <p>If someone can tell it's AI, the job failed.</p>
              </>
            }
          />
          <Faq
            id="faq-2"
            question="Will this work on real product pages, not just ads?"
            answer={
              <>
                <p>Yes — that's exactly what it's built for.</p>
                <p>These photos are designed to live on:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>PDPs</li>
                  <li>Landing pages</li>
                  <li>Paid ads</li>
                  <li>Marketplaces</li>
                </ul>
                <p>They don't scream "campaign visual".</p>
                <p>They blend in like a real studio shoot.</p>
              </>
            }
          />
          <Faq
            id="faq-3"
            question="Are you redesigning or 'improving' my product?"
            answer={
              <>
                <p>No.</p>
                <p>Your product stays 100% unchanged:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Same proportions</li>
                  <li>Same colors</li>
                  <li>Same textures</li>
                  <li>Same packaging details</li>
                </ul>
                <p>No creative interpretation.</p>
                <p>No AI "enhancement".</p>
              </>
            }
          />
          <Faq
            id="faq-4"
            question="How is this different from other AI photo tools?"
            answer={
              <>
                <p>Most tools optimize for:</p>
                <p>"Wow, this looks cool."</p>
                <p>I optimize for:</p>
                <p>"This feels real enough to trust."</p>
                <p>That means:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Natural lighting (not studio-perfect)</li>
                  <li>Realistic environments</li>
                  <li>No AI smoothing or glow</li>
                  <li>No stock-photo stiffness</li>
                </ul>
                <p>Conversion beats novelty. Every time.</p>
              </>
            }
          />
          <Faq
            id="faq-5"
            question="Will customers know this was made with AI?"
            answer={
              <>
                <p>They won't ask — and that's the point.</p>
                <p>People don't think:</p>
                <p>"Is this AI?"</p>
                <p>They think:</p>
                <p>"Do I trust this product?"</p>
                <p>If the photo feels real, the question never comes up.</p>
              </>
            }
          />
          <Faq
            id="faq-6"
            question="Why not just do a real photoshoot?"
            answer={
              <>
                <p>You can — and you should, when it makes sense.</p>
                <p>But real shoots are:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Expensive</li>
                  <li>Slow</li>
                  <li>Hard to iterate</li>
                  <li>Painful to reshoot for every variation</li>
                </ul>
                <p>This gives you studio-quality results, faster, cheaper, and without coordination hell.</p>
              </>
            }
          />
          <Faq
            id="faq-7"
            question="What if the result doesn't feel right?"
            answer={
              <>
                <p>Then we fix it.</p>
                <p>If something feels off — lighting, integration, realism — it gets adjusted.</p>
                <p>The goal isn't delivery.</p>
                <p>The goal is confidence using the image on your PDP.</p>
              </>
            }
          />
          <Faq
            id="faq-8"
            question="Who is this NOT for?"
            answer={
              <>
                <p>Good question.</p>
                <p>This is not for:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>AI art projects</li>
                  <li>Fantasy visuals</li>
                  <li>Over-stylized branding</li>
                  <li>People chasing trends instead of sales</li>
                </ul>
                <p>It's for brands who care about trust and conversion.</p>
              </>
            }
          />
        </FAQsTwoColumnAccordion>

        {/* Pricing */}
        <PricingMultiTier
          id="pricing"
          headline="Pricing to fit your needs."
          plans={
            <>
              <Plan
                name="Starter"
                price="$12"
                period="/mo"
                subheadline={<p>Small teams getting started with shared inboxes</p>}
                features={[
                  'Shared inbox for up to 2 mailboxes',
                  'Tagging & assignment',
                  'Private notes',
                  'Automatic replies',
                  'Email support',
                ]}
                cta={
                  <SoftButtonLink href="#" size="lg">
                    Start free trial
                  </SoftButtonLink>
                }
              />
              <Plan
                name="Growth"
                price="$49"
                period="/mo"
                subheadline={<p>Growing teams needing collaboration and insights</p>}
                badge="Most popular"
                features={[
                  'Everything in Starter',
                  'Inbox Agent',
                  'Unlimited mailboxes',
                  'Collision detection',
                  'Snippets and templates',
                  'Reporting dashboard',
                  'Slack integration',
                ]}
                cta={
                  <ButtonLink href="#" size="lg">
                    Start free trial
                  </ButtonLink>
                }
              />
              <Plan
                name="Pro"
                price="$299"
                period="/mo"
                subheadline={<p>Support-focused organizations and larger teams</p>}
                features={[
                  'Everything in Growth',
                  'Custom roles & permissions',
                  'Automation engine',
                  'API access',
                  'SLA tracking',
                  'SSO support',
                  'SOC 2 compliance',
                ]}
                cta={
                  <SoftButtonLink href="#" size="lg">
                    Start free trial
                  </SoftButtonLink>
                }
              />
            </>
          }
        />

        {/* Call To Action */}
        <CallToActionSimple
          id="call-to-action"
          headline="Do you have a custom project in mind?"
          subheadline={
            <p>
              On-demand service for high-volume requests or full AI brand photoshoots.
            </p>
          }
          cta={
            <div className="flex items-center gap-4">
              <ButtonLink href="mailto:hello@yuzuu.co" size="lg">
                Contact us
              </ButtonLink>

            </div>
          }
        />
      </Main>

      <FooterWithLinksAndSocialIcons
        id="footer"
        links={
          <>
            {/* All links removed */}
          </>
        }
        socialLinks={
          <>
            <SocialLink href="https://x.com/notanothermrktr" name="X">
              <XIcon />
            </SocialLink>
          </>
        }
        fineprint="Service delivered with 🧡 by Not Another Marketer © 2025 Yuzuu, Inc."
      />
    </>
  )
}
