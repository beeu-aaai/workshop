export default function Home() {
  return (
   <main className="">
       <div className="bg-[url('/beeu-workshop/images/sgp.jpg')] bg-cover bg-center w-full h-screen">
           <div className="text-white w-full h-screen flex flex-col items-center justify-center backdrop-blur-sm backdrop-brightness-75">
                <span className="text-2xl">AAAI 2026 Workshop on</span>
                <h1 className="text-4xl font-bold text-center">
                    Bodily Expressed Emotion
                    <br/> Understanding (BEEU)
                </h1>
               <span className="mt-12">January 26, 2026</span>
               <span>Singapore</span>
           </div>
       </div>

      <div className="px-4 lg:px-24 py-20 flex flex-col space-y-20">
          {/* Overview */}
          <div className="w-full flex flex-col space-y-4" id="overview">
              <h2 className="text-4xl">Overview</h2>
              <p className="text-2xl">
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
              <ol className="text-2xl list-decimal pl-10">
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
              <p className="text-2xl">
                  The workshop will include the following components: oral paper presentations, lightning talk
                  sessions, keynote talks by invited speakers, and a panel discussion. The workshop will also
                  have a challenge component, and the presentations can include top submissions made to our
                  challenge track. It will be a 1-day event.
              </p>
          </div>

          {/* Submission Guidelines */}
          <div className="w-full flex flex-col space-y-4" id="guidelines">
              <h2 className="text-4xl">Submission Guidelines</h2>
              <div className="flex flex-col space-y-4 text-2xl">
                  <p>
                      We invite submissions on any of the topics of interest (or adjacent topics) in two different
                      formats:
                  </p>
                  <ol type={"a"}>
                      <li>
                          <span className="font-bold">2 page Extended Abstracts</span>: these submissions will be selected to provide a ~5 minute
                          lightning talk
                      </li>
                      <li>
                          <span className="font-bold">6-8 pages full papers</span>: these submissions will be selected for oral presentations of about
                          15 minutes.
                      </li>
                  </ol>
                  <p>
                      We welcome the submission of in-progress, unpublished, or already published work (subject to
                      the policies of the original publishing venue).
                  </p>
              </div>
          </div>

          {/* Important Dates */}
          <div className="w-full flex flex-col justify-center space-y-4" id="dates">
              <h2 className="text-4xl">Important Dates</h2>
              <p className="text-lg italic">TBA</p>
          </div>

          {/* Schedule */}
          <div className="w-full flex flex-col justify-center space-y-4" id="schedule">
              <h2 className="text-4xl">Schedule</h2>
              <p className="text-lg italic">TBA</p>
          </div>

          {/* Invited Speakers */}
          <div className="w-full flex flex-col justify-center space-y-4" id="speakers">
              <h2 className="text-4xl">Invited Speakers</h2>
              <p className="text-lg italic">TBA</p>
          </div>

          {/* Organizing Committee */}
          <div className="w-full flex flex-col justify-center space-y-4" id="organizers">
              <h2 className="text-4xl">Organizing Committee</h2>
              <p className="text-lg italic">TBA</p>
          </div>
      </div>




   </main>
  );
}
