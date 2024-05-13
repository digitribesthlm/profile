function Profile() {
    return (
      <div className="bg-gray-100 p-8">
        <div className="card card-bordered max-w-lg mx-auto">
          <div className="card-body">
            <div className="flex flex-col items-center">
              <img src="/patrik-21.png" alt="Patrik Alriksson" className="mask mask-circle" />
              <h2 className="card-title">Patrik Alriksson</h2>
              <p>I help marketing teams, agencies, and B2B companies achieve amazing results by sharing knowledge, tools, and methods that work. My goal is to create more profitable customers. With a knack for numbers, diagrams, and statistics, I reveal what's really happening with your and your competitors' activities on the net. If you have questions about how to increase the right type of traffic to your website – and convert them to customers – feel free to contact me.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Let's Talk</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Profile;
  