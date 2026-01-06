import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function FeedbackApp() {
  const [form, setForm] = useState({ name: "", email: "", feedback: "" });
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
  };

  return (
    <Card className="max-w-md mx-auto shadow-xl border-t-4 border-primary">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Feedback Form</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Textarea
            placeholder="Your Feedback"
            value={form.feedback}
            onChange={(e) => setForm({ ...form, feedback: e.target.value })}
          />
          <Button type="submit" className="w-full">
            Submit Feedback
          </Button>
        </form>

        {submitted && (
          <div className="mt-6 p-4 bg-muted rounded-lg animate-in fade-in slide-in-from-bottom-2">
            <h3 className="font-semibold border-b pb-2 mb-2">
              Submission Details
            </h3>
            <p>
              <strong>Name:</strong> {submitted.name}
            </p>
            <p>
              <strong>Email:</strong> {submitted.email}
            </p>
            <p>
              <strong>Message:</strong> {submitted.feedback}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
