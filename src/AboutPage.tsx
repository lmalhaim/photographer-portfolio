export default function About() {
  return (
    <div className="w-full px-6 py-12 flex flex-col items-center text-white">
      {/* Hero */}
      <div className="w-full max-w-5xl text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Behind the Lens</h2>
        <p className="text-lg text-neutral-400">
          A little about me and the stories I capture.
        </p>
      </div>

      {/* Bio Card */}
      <div className="w-full max-w-5xl bg-white/3 p-7 shadow-xl flex flex-col justify-between">
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
          <img
            src="/pexels-olly-774909.jpg"
            alt="Photographer portrait"
            className="w-full md:w-1/3 object-cover"
          />
          <div className="flex flex-col justify-center text-neutral-200 space-y-4 text-lg">
            <p>
              Hi, I’m Jenny — a visual storyteller drawn to fleeting moments
              and honest emotion. My love for photography began in the streets
              of Tokyo, capturing strangers lit by neon — small windows into
              quiet lives.
            </p>

            <p>
              Over time, I found myself pulled toward portraiture and travel —
              slow, observant photography that lingers. I don’t shoot to
              impress. I shoot to remember. To feel. To connect.
            </p>

            <p>
              I use a Canon R5 and a Fuji X100V — tools that let me stay present
              and agile. My editing style leans toward cinematic shadows and
              natural light. But gear doesn’t matter much. What matters is
              presence. What matters is curiosity.
            </p>
          </div>
        </div>
        <div className="w-full max-w-5xl py-10 flex flex-col md:flex-row gap-8">
          <div className="flex flex-col justify-center text-neutral-200 space-y-4 text-lg">
            <p>
              When I photograph, I’m not chasing perfection — I’m chasing
              presence. I wait for the moment someone forgets the camera is
              there. That’s when the real image appears.
            </p>

            <p>
              My favorite photos often come from in-between moments: a glance, a
              pause, the soft tension before a laugh. I don’t direct much. I
              observe, I listen, and I let people show themselves.
            </p>

            <p>
              Every image here is part of a larger story — one you’re invited to
              imagine, feel, and interpret. This is not just a portfolio. It’s a
              slow walk through the ordinary, seen a little more tenderly.
            </p>
          </div>
          <img
            src="/pexels-fotorobot-339379.jpg"
            alt="Photographer Camera"
            className="w-full md:w-1/3 object-cover"
          />
        </div>
      </div>

      {/* Quote */}
      <div className="mt-16 max-w-2xl text-center text-neutral-400 italic text-lg">
        “Photography is the story I fail to put into words.”
      </div>
    </div>
  );
}
