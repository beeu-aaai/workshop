import Link from "next/link";
import {Button} from "@/components/ui/button";
import ProfileCard from "@/components/ui/profile-card";
import SpeakerCard from "@/components/ui/speaker-card";

export default function Home() {
  return (
   <main className="">
       <div className="bg-[url('/workshop/images/sgp.jpg')] bg-cover bg-center w-full h-screen">
           <div className="text-white w-full h-screen flex flex-col items-center justify-center backdrop-blur-sm backdrop-brightness-75">
                <span className="text-2xl">AAAI 2026 Workshop on</span>
                <h1 className="text-4xl font-bold text-center">
                    Bodily Expressed Emotion
                    <br/> Understanding (BEEU)
                </h1>
               <span className="mt-12">January 26, 2026</span>
               <span>Singapore</span>

               <Link href="#location" className="underline absolute mt-80">Venue Details</Link>
           </div>
       </div>

      <div className="px-4 lg:px-24 py-20 flex flex-col space-y-20">
          {/* Overview */}
          <div className="w-full flex flex-col space-y-4" id="overview">
              <h2 className="text-4xl">Overview</h2>
              <p className="text-xl">
                  Humans inherently communicate through body language. Bodily
                  expressions are a fundamental, often subconscious, way of responding to social situations and
                  expressing emotions. Despite extensive studies in psychology, human behavior, dance, and
                  theater, computational interpretation of body language, to predict internal states such as
                  emotions or intention, remains challenging and underexplored. Addressing this gap holds
                  significant potential across various fields: from socially adept robots and intuitive AI interfaces to
                  holistic AI systems approaching human-level physical intelligence.
                  <br/><br/>
                  <span className="font-bold">The 2nd International Workshop on Bodily Expressed Emotion Understanding</span> welcomes discussions on
                  approaches and latest results on modeling body language automatically. A primary focus will be
                  on predicting emotions and emotion-related behavior, while research on related tasks and
                  applications (e.g., activity recognition, generation of socially appropriate behavior, embodied
                  intelligence, etc.) will also be strongly encouraged to be shared.
              </p>
          </div>

          {/* Call For Papers */}
          <div className="w-full flex flex-col space-y-4" id="topics">
              <h2 className="text-4xl">Topics of Interest</h2>
              <ol className="text-xl list-decimal pl-10">
                  <li>Automatic Modeling of Body Language</li>
                  <li>Emotion Recognition using Body Language</li>
                  <li>Activity Recognition using Body Language</li>
                  <li>Emotion Understanding Beyond Facial Expression</li>
                  <li>Emotional Gesture Generation</li>
                  <li>Applications in Robotics, HRI, or related fields</li>
                  <li>Use of Large Foundation Models for Emotion Recognition, Expression, Generation</li>
                  <li>Data sharing and open-science with human subjects data</li>
                  <li>Expressive human pose representation</li>
                  <li>Human movements coding system</li>
                  <li>Algorithmic fairness and data ethics related to emotion modeling</li>
              </ol>
              <p className="text-xl">
                  The workshop will include the following components: oral paper presentations, lightning talk
                  sessions, keynote talks by invited speakers, and a panel discussion. The workshop will also
                  have a challenge component, and the presentations can include top submissions made to our
                  challenge track. It will be a 1-day event.
              </p>
          </div>

          {/* Paper Submission Guidelines */}
          <div className="w-full flex flex-col space-y-4" id="guidelines">
              <h2 className="text-4xl">Paper Submission Guidelines</h2>
              <div className="flex flex-col space-y-4 text-xl">
                  <p>
                      We invite submissions on any of the topics of interest (or adjacent topics) in two different
                      formats:
                  </p>
                  <ol>
                      <li>
                          <span className="font-bold">2 Page Extended Abstracts</span>: these submissions will be selected to provide a ~5 minute
                          lightning talk
                      </li>
                      <li>
                          <span className="font-bold">6-8 Page Full Papers</span>: these submissions will be selected for oral presentations of about
                          15 minutes.
                      </li>
                  </ol>
                  <p>
                      We welcome the submission of in-progress, unpublished, or already published work (subject to
                      the policies of the original publishing venue). Submissions should follow
                      <Link className="mx-1 font-semibold underline" href="https://aaai.org/conference/aaai/aaai-26/submission-instructions/" target="_blank">AAAI style guidelines ↗</Link>
                      and the page limit does not include appendices or references.
                  </p>

                  <Button className="py-8 shadow-xl bg-red-800 mt-4 hover:bg-red-900">
                      <Link target="_blank" href="https://openreview.net/group?id=AAAI.org/2026/Workshop/BEEU">Link to Submission via OpenReview ↗</Link>
                  </Button>
              </div>
          </div>

          {/* Reviewers */}
          <div className="w-full flex flex-col justify-center space-y-4" id="reviewers">
              <h2 className="text-4xl">Call for Reviewers</h2>
              <p className="text-xl">
                  We welcome anyone interested to apply to be a reviewer. The role of reviewers is to provide constructive feedback to all assigned submissions and rate each submission in terms of relevance, clarity, novelty, significance, and technical quality.
              </p>
              <p className="text-xl"><span className="font-bold">Reviewer Application Deadline</span>: October 25th, 2025</p>
              <p className="text-xl"><span className="font-bold">Reviewer Decisions and Assignments</span>: Rolling</p>

              <Button className="py-8 shadow-xl bg-stone-700 mt-4">
                  <Link target="_blank" href="https://forms.office.com/Pages/ResponsePage.aspx?id=RY30fNs9iUOpwcEVUm61LsWMWqsuOyhMkMwlCpsAiOpUQzMxMENBNVpZTklGUTdNT0g2VTlSRTNSSi4u">Link to Reviewer Sign Up Form ↗</Link>
              </Button>
          </div>

          {/* Important Dates */}
          <div className="w-full flex flex-col justify-center space-y-4" id="dates">
              <h2 className="text-4xl">Important Dates</h2>
              <p className="text-xl"><span className="font-bold">Deadline for Paper Submissions</span>: November 4th, 2025</p>
              <p className="text-xl"><span className="font-bold">Notifications sent to Authors</span>: November 17th, 2025</p>
              <p className="text-xl"><span className="font-bold">Workshop Presentations</span>: January 26th, 2026</p>
          </div>

          {/* Schedule */}
          <div className="w-full flex flex-col justify-center space-y-4" id="schedule">
              <h2 className="text-4xl">Schedule</h2>
              <div className="text-xl flex flex-col gap-4">
                  <p>9:00 AM - 9:15 AM: Welcome Note by James Wang and Sree Bhattacharyya</p>
                  <p>9:15 AM - 9.55 AM: Keynote Talk by Agata Lapedriza</p>
                  <p>9:55 AM - 10:35 AM: Keynote Talk by Heather Knight</p>
                  <p>10:35 AM - 11 AM: Coffee Break</p>
                  <p>11 AM - 12 PM: Panel with Keynote Speakers</p>
                  <p>12 PM - 1:00 PM: Lunch</p>
                  <p>1:00 PM - 1:40 PM: Keynote Talk by Beatrice Gelder</p>
                  <p>1:40 PM - 2:10 PM: Introducing the ABEE dataset by Justin Lokos and Sree Bhattacharyya</p>
                  <p>2:10 PM - 2:50 PM: Keynote Talk by Soujanya Poria</p>
                  <p>2:50 PM - 3:30 PM: Keynote Talk by Lauren Bedal</p>
                  <p>3:30 PM - 4 PM: Coffee Break</p>
                  <p>4 PM - 5 PM: Accepted Paper Talks (6 talks)</p>
              </div>
          </div>

          <div className="w-full flex flex-col space-y-4 text-xl" id="location">
              <h2 className="text-4xl">Venue Details</h2>
              <p>The workshop takes place on <span className="font-semibold">January 26, 2026</span> and the venue is located at <span className="font-semibold">Grand Mercure Roxy Hotel - Meyer Room</span>. Shuttle services are available from the Singapore EXPO.</p>
              <div style={{ width: "100%", height: 450, overflow: "hidden", borderRadius: 12 }}>
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4004.3675507162507!2d103.90220177497815!3d1.3031763617240713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da18727dfbed85%3A0x6d766d19235d9606!2sGrand%20Mercure%20Singapore%20Roxy!5e1!3m2!1sen!2sus!4v1767970419341!5m2!1sen!2sus"
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                  />
              </div>
          </div>

          {/* Invited Speakers */}
          <div className="w-full flex flex-col justify-center space-y-4" id="speakers">
              <h2 className="text-4xl">Invited Speakers</h2>
              <SpeakerCard
                  imageUrl="/workshop/avatars/alapedriza.jpg"
                  name="Agata Lapedriza"
                  title="Principal Research Scientist, Institute for Experiential AI at Northeastern University"
                  description="Agata Lapedriza is a Principal Research Scientist at Northeastern University’s Institute for Experiential AI, a Professor at Universitat Oberta de Catalunya, and a Research Affiliate at MIT CSAIL. Her work develops robust AI to interpret emotions, social signals, and human context from visual, language, and wearable-sensor data, in collaboration with clinical and cognitive science experts. Her research spans computer vision, affective computing, NLP, machine learning/deep learning, social robotics, and HCI."
                  email="a.lapedriza (at) northeastern.edu"
                  website="https://ai.northeastern.edu/our-people/agata-lapedriza"
              />
              <SpeakerCard
                  imageUrl="/workshop/avatars/sp.jpg"
                  name="Soujanya Poria"
                  title="Associate Professor, Nanyang Technological University"
                  description="Soujanya Poria is an Associate Professor at Nanyang Technological University (NTU), Singapore. His research spans large language models, reasoning, AI safety, embodied and multimodal AI, and natural language processing. He earned his Ph.D. in Computer Science from the University of Stirling (UK) and previously held roles at the Singapore University of Technology and Design and A*STAR’s Institute of High Performance Computing (IHPC)."
                  email="soujanya.poria (at) ntu.edu.sg"
                  website="https://soujanyaporia.github.io/"
              />
              <SpeakerCard
                  imageUrl="/workshop/avatars/bdg.jpg"
                  name="Beatrice de Gelder"
                  title="Professor, Maastricht University"
                  description="Beatrice de Gelder is a Professor in the Department of Cognitive Neuroscience at Maastricht University. Trained in philosophy and psychology, she earned her PhD (1972) from the University of Louvain and began her career teaching Philosophy of Science in Leiden and Tilburg before shifting to cognitive science in the mid-1990s. Her research focuses on non-conscious recognition after cortical damage, emotional expression in whole bodies, face recognition and its deficits, and multisensory perception across auditory–visual processing."
                  email="b.degelder (at) maastrichtuniversity.nl"
                  website="https://www.beatricedegelder.com/"
              />
              <SpeakerCard
                  imageUrl="/workshop/avatars/hk.jpg"
                  name="Heather Knight"
                  title="Professor, Oregon State University"
                  description="Dr. Heather Knight’s postdoc at Stanford University explored minimal robots and autonomous car interfaces, PhD in Robotics at Carnegie Mellon University in “Expressive Motion for Low Degree of Freedom Robots.” and M.S. / B.S. in Electrical Engineering & Computer Science at Massachusetts Institute of Technology, developing a Sensate Skin for a Robot Teddy Bear at the MIT Media Lab."
                  email="heather.knight (at) oregonstate.edu"
                  website="https://scholar.google.com/citations?user=ToADd0IAAAAJ&hl=en"
              />
              <SpeakerCard
                  imageUrl="/workshop/avatars/lb.jpg"
                  name="Lauren Bedal"
                  title="Head of Product Design, Archetype AI"
                  description="Lauren Bedal is a designer and thought leader in human-computer interaction, bridging the worlds of technology and embodiment. With an extensive background in movement, choreography and dance, she helps startups, agencies, and Fortune 100 companies like Google bring emerging technologies to market, specializing in embodied inputs such as proximity, gestures, body language, and biometrics (Project Soli)."
                  email="lbedal2@gmail.com"
                  website="https://laurenbedal.com/"
              />
          </div>

          {/* Organizing Committee */}
          <div className="w-full flex flex-col justify-center" id="organizers">
              <h2 className="text-4xl">Organizing Committee</h2>
              <div className="mt-4 p-4 border rounded-2xl grid grid-cols-1 lg:grid-cols-3 gap-2">
                  <div className="lg:col-span-2">
                      <ProfileCard imageUrl="/workshop/avatars/jzw.jpg" name="James Z. Wang" title="Distinguished Professor, Penn State (Workshop Chair)" email="jzw11 (at) psu.edu"/>
                  </div>
                  <ProfileCard imageUrl="/workshop/avatars/sb.jpg" name="Sree Bhattacharyya" title="PhD Student, Penn State" email="sfb6038 (at) psu.edu"/>
                  <ProfileCard imageUrl="/workshop/avatars/al.jpg" name="Amy LaViers" title="Director, The RAD Lab" email="amy (at) the-rad-lab.org"/>
                  <ProfileCard imageUrl="/workshop/avatars/ra.jpg" name="Reg Adams" title="Professor, Penn State" email="rba10 (at) psu.edu"/>
                  <ProfileCard imageUrl="/workshop/avatars/rt.jpg" name="Rachelle Tsachor" title="Associate Professor, University of Illinois Chicago" email="rtsachor (at) uic.edu"/>
              </div>
          </div>

          {/* Other Contributors */}
          <div className="w-full flex flex-col justify-center">
              <h2 className="text-4xl">Other Contributors</h2>
              <div className="mt-4 p-4 border rounded-2xl grid grid-cols-1 lg:grid-cols-3 gap-2">
                  <ProfileCard imageUrl="/workshop/avatars/sz.jpg" name="Sitao Zhang" title="PhD Student, Penn State" email="sitao.zhang (at) psu.edu"/>
                  <ProfileCard imageUrl="/workshop/avatars/jc.jpg" name="Jonathan Chen" title="Undergrad Student, Penn State" email="jqc6822 (at) psu.edu"/>
                  <ProfileCard imageUrl="/workshop/avatars/jl.jpg" name="Justin Lokos" title="Independent Contributor" email="jtl5503 (at) psu.edu"/>
              </div>
          </div>
      </div>

       {/* Footer */}
       <div className="h-1 bg-stone-500 w-full"/>
       <div className="py-4 bg-stone-700 text-white w-full flex flex-col justify-center">
           <p className="px-4 lg:px-24 text-xs text-center lg:text-start">© The 2nd International Workshop on Bodily Expressed Emotion Understanding (BEEU, 2026)</p>
       </div>
   </main>
  );
}
