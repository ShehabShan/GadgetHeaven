// Using react-icons

import useAuth from "../../../Hooks/useAuth";

export default function MyProfilePage() {
  const { user } = useAuth();
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <section className="p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="w-32 h-32 sm:w-48 sm:h-48 bg-gray-300 rounded-full flex items-center justify-center">
              <img
                src={user?.photoURL}
                alt="Profile picture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left space-y-2">
              <h1 className="text-3xl font-bold">{user?.displayName}</h1>
              <p className="text-xl text-gray-600">Software Developer</p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
                <button className="border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100">
                  Edit Profile
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100">
                  Share Profile
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <span>{user?.email}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <span>TechCorp Inc.</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <span>Joined January 2020</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <a
                href="https://johndoe.com"
                className="text-blue-500 hover:underline"
              >
                https://johndoe.com
              </a>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-600">
              Passionate software developer with 5+ years of experience in
              building web applications. Specialized in React, Node.js, and
              cloud technologies. Always eager to learn and tackle new
              challenges.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Node.js",
                "TypeScript",
                "AWS",
                "Docker",
                "GraphQL",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
