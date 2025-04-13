import logo from "../assets/goodlogo.png"

const About = () => {
    const spiritualActs = [
      "Instruct the ignorant",
      "Counsel the doubtful",
      "Admonish sinners",
      "Bear wrongs patiently",
      "Forgive offenses willingly",
      "Pray for the living & the dead",
      "Comfort the afflicted",
    ];
  
    const corporalActs = [
      "Feed the hungry",
      "Give drink to the thirsty",
      "Clothe the naked",
      "Shelter the homeless",
      "Visit the sick and imprisoned",
      "Bury the dead",
    ];
  
    return (
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Good Samaritans
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Let us be good Samaritans by doing acts of mercy.
            </p>
          </div>
        </section>
  
        {/* Parable Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-6 text-blue-900">
              The Parable of the Good Samaritan
            </h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                <strong>Luke 10:25-37</strong> (New International Version):
              </p>
              <p className="mb-4">
                On one occasion an expert in the law stood up to test Jesus.
                “Teacher,” he asked, “what must I do to inherit eternal life?”
              </p>
              <p className="mb-4">
                “What is written in the Law?” he replied. “How do you read it?”
                He answered, “‘Love the Lord your God with all your heart and with
                all your soul and with all your strength and with all your mind’;
                and, ‘Love your neighbor as yourself.’” “You have answered
                correctly,” Jesus replied. “Do this and you will live.”
              </p>
              <p className="mb-4">
                But he wanted to justify himself, so he asked Jesus, “And who is my
                neighbor?”
              </p>
              <p className="mb-4">
                In reply Jesus said: “A man was going down from Jerusalem to
                Jericho, when he was attacked by robbers. They stripped him of his
                clothes, beat him and went away, leaving him half dead. A priest
                happened to be going down the same road, and when he saw the man, he
                passed by on the other side. So too, a Levite, when he came to the
                place and saw him, passed by on the other side. But a Samaritan, as
                he traveled, came where the man was; and when he saw him, he took
                pity on him. He went to him and bandaged his wounds, pouring on oil
                and wine. Then he put the man on his own donkey, brought him to an
                inn and took care of him. The next day he took out two denarii and
                gave them to the innkeeper. ‘Look after him,’ he said, ‘and when I
                return, I will reimburse you for any extra expense you may have.’
              </p>
              <p className="mb-4">
                “Which of these three do you think was a neighbor to the man who
                fell into the hands of robbers?” The expert in the law replied, “The
                one who had mercy on him.” Jesus told him, “Go and do likewise.”
              </p>
            </div>
          </div>
        </section>
  
        {/* Logo Meaning Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-6 text-blue-900">
              Our Logo
            </h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                The Good Samaritans Kampala Archdiocese logo was designed with the
                Archdiocese as the mother body that oversees all activities.
              </p>
              <p className="mb-4">
                The Pallium of the Archbishop is used to create a link as a leader
                who leads his church and community, as well as a helper. The yellow
                and blue Pallium is used as a base holding the monstrance, giving
                the logo a good contrast and reflecting hope to all.
              </p>
              <p className="mb-4">
                The two crosses found at the sides of the Pallium depict Christ’s
                victory over death and also represent the five crosses found on the
                Pallium of the Archbishop.
              </p>
              <p className="mb-4">
                The circle and monstrance are merged together, giving an idea of
                unity, where we Catholics mostly look at the monstrance during
                adoration. The demonstration of the Samaritan in the red circle
                reminds us of God’s love over evil.
              </p>
              <p className="mb-4">
                Black is used to reflect leadership, royal blue reminds us of the
                calmness of Jesus, and as children of God, we must treat each other
                with great love and respect by doing great acts of mercy to restore
                hope.
              </p>
            </div>
            {/* Logo image from Unsplash */}
            <div className="mt-6 text-center">
              <img
                src={logo}
                alt="Good Samaritans Logo"
                className="mx-auto rounded-lg shadow-md w-64 h-64 object-cover"
              />
            </div>
          </div>
        </section>
  
        {/* Acts of Mercy Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-8 text-blue-900">
              Acts of Mercy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Spiritual Acts */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">
                  Spiritual Acts of Mercy
                </h3>
                <ul className="space-y-2">
                  {spiritualActs.map((act, index) => (
                    <li
                      key={index}
                      className="bg-blue-50 p-4 rounded-lg shadow-sm text-gray-700"
                    >
                      {act}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Corporal Acts */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">
                  Corporal Works of Mercy
                </h3>
                <ul className="space-y-2">
                  {corporalActs.map((act, index) => (
                    <li
                      key={index}
                      className="bg-blue-50 p-4 rounded-lg shadow-sm text-gray-700"
                    >
                      {act}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  };
  
  export default About;