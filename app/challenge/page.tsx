"use client";

import Link from "next/link";
import {Button} from "@/components/ui/button";
import ProfileCard from "@/components/ui/profile-card";

export default function Challenge() {
  return (
   <main className="">
       <div className="bg-gradient-to-tr  from-orange-300 to-red-500 bg-cover bg-center w-full h-screen">
           <div className="text-white w-full h-screen flex flex-col items-center justify-center backdrop-blur-sm backdrop-brightness-75">
               <span className="text-2xl">The Second</span>
               <h1 className="text-4xl font-bold text-center">
                    Bodily Expressed Emotion
                    <br/> Understanding (BEEU) Challenge
                </h1>

               <span className="mt-12">4 Challenge Tracks</span>
               <span> Open until January 10th, 2026</span>
           </div>
       </div>

      <div className="px-4 lg:px-24 py-20 flex flex-col space-y-20">
          <div className="w-full flex flex-col space-y-4">
              <p className="text-xl">
                  We are thrilled to announce the launch of the
                  <span className="font-bold"> BEEU Challenge 2025</span>, featuring a new emotion benchmark and competition track dedicated to advancing the understanding and modeling of
                  <span className="font-bold"> bodily-expressed emotions</span> in videos.
              </p>
          </div>

          {/* Overview */}
          <div className="w-full text-xl flex flex-col space-y-4" id="overview">
              <h2 className="text-4xl">Overview</h2>
              <p>The challenge will be based on the <span className="font-bold"> Annotated Bodily Expressed Emotion (ABEE)</span> dataset.</p>
              <p>This dataset contains ~3,200 short video clips depicting naturalistic bodily expressions of emotion, spanning 8 main emotion categories (e.g., happiness, love, surprise, anger, fear, sadness, embarrassment, disgust), and 20 sub-categories of emotion.</p>
              <p>There will be multiple tracks within the challenge, and all participants are strongly encouraged to submit papers detailing their use of the dataset to BEEU 2026.</p>
              <p>The following are the main categories and sub-categories of emotion:</p>
              <ol className="text-xl list-decimal pl-10">
                  <li>Happiness: Playful, Eager/Seeking, Contentment, Pride</li>
                  <li>Love: Affection/Care, Romantic or Sexual Attraction</li>
                  <li>Surprise: Delightful Surprise, Fearful Surprise</li>
                  <li>Anger: Hostility, Annoyance, Frustration</li>
                  <li>Sadness: Dismay, Grief, Suffering</li>
                  <li>Fear: Panic, Terror</li>
                  <li>Disgust/Aversion: Revulsion, Boredom</li>
                  <li>Embarrassment: Shame, Guilt</li>
              </ol>

              <p>Along with this, we will also provide the Valence, Arousal, and Dominance ratings for the video clips. These ratings all range between 1-9. 1 denotes a low level of Valence (or Arousal/Dominance) in the emotion being expressed by the main human subject in the video clip, and 9 denotes a high level of the same.</p>
              <p>Of these, <span className="font-bold">2,200 clips are provided with ground-truth annotations</span>, where each clip may be associated with multiple emotion labels: reflecting the richness and co-occurrence of affective states in real-world behavior.
                  1000 videos will also be provided, which form part of the test set.</p>
          </div>

          {/* Challenge Tasks */}
          <div className="w-full text-xl flex flex-col space-y-4" id="tasks">
              <h2 className="text-4xl">Challenge Tasks</h2>
              <p>Participants are invited to compete in one or more of the following tasks:</p>

              <div className="ml-8 flex flex-col space-y-4">
                  <div>
                      <h3 className="font-semibold">1. Multi-Label Emotion Prediction</h3>
                      <p>Predict one or more emotion categories associated with each video clip.</p>
                      <p><span className="italic">Goal:</span> Develop models capable of handling overlapping or blended emotions expressed through bodily cues.</p>
                      <p><span className="italic">Evaluation Criteria:</span> Evaluation will use simple set-based metrics (intersection over union). (There will be bonus points even for misclassified samples, based on emotion distance). Evaluation will be performed only on the test set.</p>
                      <p><span className="italic">Required Response Format:</span> The response submitted by the participant should include the video ID (for videos in the test set), and the list of predicted emotion words, where the set of emotions covers both the main categories and the sub-categories. This should ideally be in a CSV format, under the column names of id and prediction.</p>
                  </div>

                  <div>
                      <h3 className="font-semibold">2. Emotional Explanation Generation</h3>
                      <p>Generate textual explanations describing why a particular emotion is inferred to be expressed in the clip.</p>
                      <p><span className="italic">Goal:</span> Encourage interpretability and reasoning in emotion recognition systems.</p>
                      <p><span className="italic">Evaluation Criteria:</span> We will conduct curated human studies to evaluate the generated explanation. Further, we will use standard n-gram metrics like BLEU and ROUGE to evaluate the quality of explanations.</p>
                      <p><span className="italic">Required Response Format:</span> For each label in the ground truth label set of the video, an explanation should be generated. The submission can be a JSON-like file, where the video ID is present, and emotion labels in the ground truth set serve as keys, and the generated explanations serve as values. </p>
                  </div>
                  <div>
                      <h3 className="font-semibold">3. Valence–Arousal–Dominance (VAD) Prediction</h3>
                      <p>Predict continuous valence, arousal, and dominance scores for each video.</p>
                      <p><span className="italic">Goal:</span> Capture the underlying affective dimensions that complement categorical emotion representations.</p>
                      <p><span className="italic">Evaluation Criteria:</span> We will use the R^2 metric for this regression task. Evaluation will be only on the test set. </p>
                      <p><span className="italic">Required Response Format:</span> Similar to Task 1, the submission should include the video IDs (under column id), and along with that, include 3 other columns: valence, arousal, dominance with the predicted values of each. </p>
                  </div>
                  <div>
                      <h3 className="font-semibold">4. Open-Ended Usage Track</h3>
                      <p>
                          In this track, participants are encouraged to submit any material (video, demo of created system) that demonstrates creative usage of our bodily expressed emotion dataset, beyond the requirements of the standard tasks listed above. This could include application of the dataset on any downstream task beyond emotion recognition, using it to create artistic or interactive systems, etc. The submission format will support upload of a video (for a demo or similar), and a PDF file detailing the method. <span className="font-semibold"> Paper submissions on this are also highly encouraged (in which case the report can be omitted).</span>
                      </p>
                  </div>
              </div>

              <p className="text-xl">
                  A public leaderboard will be hosted, and <span className="font-bold"> top-performing submissions will be invited to present their work</span> at the workshop.
              </p>
          </div>

          {/* Participation */}
          <div className="w-full flex flex-col space-y-4" id="participation">
              <h2 className="text-4xl">Participation</h2>
              <div className="flex flex-col space-y-4 text-xl">
                  <p>
                      Interested in the challenge? To get started, please fill out the form linked below.
                  </p>
                  <p>
                      An invite link to the ABEE dataset will be sent to your email upon successful completion of this form.
                  </p>

                  <Button className="py-8 shadow-xl bg-stone-700 mt-4">
                      <Link target="_blank" href="https://forms.cloud.microsoft/r/Y4ZQfJxS13">Link to Participant Form ↗</Link>
                  </Button>
              </div>
          </div>

          {/* Awards & Recognition */}
          <div className="w-full flex flex-col space-y-4" id="awards">
              <h2 className="text-4xl">Awards & Recognition</h2>
              <div className="flex flex-col space-y-4 text-xl">
                  <p>
                      Outstanding teams will be recognized at the workshop, with <span className="font-bold"> best-paper and best-performance awards</span> across each track. Top performing teams/submissions will automatically be invited for presentations at the conference.
                  </p>
              </div>
          </div>

          {/* Important Dates */}
          <div className="w-full flex flex-col justify-center space-y-4" id="dates">
              <h2 className="text-4xl">Important Dates</h2>
              <p className="text-xl"><span className="font-bold">ABEE Dataset Release</span>: October 10th, 2025</p>
              <p className="text-xl"><span className="font-bold">Deadline for Paper Submissions</span>: November 4th, 2025</p>
              <p className="text-xl"><span className="font-bold">Notifications sent to Authors</span>: November 7th, 2025</p>
              <p className="text-xl"><span className="font-bold">Challenge Leaderboard Closes</span>: December 31st, 2025</p>
              <p className="text-xl"><span className="font-bold">Solution Submission Deadline for All Tracks</span>: January 10th, 2026</p>
              <p className="text-xl"><span className="font-bold">Workshop Presentations</span>: January 26th, 2026</p>

              <p>
                  * Note that the paper submission deadline and the result submission for the track have different deadlines. We will allow submission for the challenge until the workshop to encourage iterative refinement of the predictions made. If the corresponding submitted paper is accepted, it may be possible to also present an updated version of the same.
              </p>
          </div>

          {/* Organizing Committee */}
          <div className="w-full flex flex-col justify-center" id="organizers">
              <h2 className="text-4xl">Organizing Committee</h2>
              <div className="mt-4 p-4 border rounded-2xl grid grid-cols-1 lg:grid-cols-3 gap-2">
                  <div className="lg:col-span-2">
                      <ProfileCard imageUrl="/workshop/avatars/jzw.jpg" name="James Z. Wang" title="Distinguished Professor, Penn State (Workshop Chair)" email="jzw11@psu.edu"/>
                  </div>
                  <ProfileCard imageUrl="/workshop/avatars/sb.jpg" name="Sree Bhattacharyya" title="PhD Student, Penn State" email="sfb6038@psu.edu"/>
                  <ProfileCard imageUrl="/workshop/avatars/al.jpg" name="Amy LaViers" title="Director, The RAD Lab" email="amy@the-rad-lab.org"/>
                  <ProfileCard imageUrl="/workshop/avatars/ra.jpg" name="Reg Adams" title="Professor, Penn State" email="rba10@psu.edu"/>
                  <ProfileCard imageUrl="/workshop/avatars/rt.jpg" name="Rachelle Tsachor" title="Associate Professor, University of Illinois Chicago" email="rtsachor@uic.edu"/>
              </div>
          </div>

          {/* Other Contributors */}
          <div className="w-full flex flex-col justify-center">
              <h2 className="text-4xl">Other Contributors</h2>
              <div className="mt-4 p-4 border rounded-2xl grid grid-cols-1 lg:grid-cols-3 gap-2">
                  <ProfileCard imageUrl="/workshop/avatars/sz.jpg" name="Sitao Zhang" title="PhD Student, Penn State" email="sitao.zhang@psu.edu"/>
                  <ProfileCard imageUrl="/workshop/avatars/jc.jpg" name="Jonathan Chen" title="Undergrad Student, Penn State" email="jqc6822@psu.edu"/>
                  <ProfileCard imageUrl="/workshop/avatars/jl.jpg" name="Justin Lokos" title="Independent Contributor" email="jtl5503@psu.edu"/>
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
