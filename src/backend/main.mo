import Time "mo:core/Time";
import Array "mo:core/Array";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let submissions = List.empty<ContactSubmission>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    if (name.isEmpty() or email.isEmpty() or message.isEmpty()) {
      Runtime.trap("All fields are required!");
    };

    let submission : ContactSubmission = {
      name;
      email;
      message;
      timestamp = Time.now();
    };

    submissions.add(submission);
  };

  public query ({ caller }) func getSubmissions() : async [ContactSubmission] {
    submissions.reverse().toArray();
  };
};
