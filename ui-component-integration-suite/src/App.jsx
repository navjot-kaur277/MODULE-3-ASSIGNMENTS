import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FeedbackApp from "./features/feedback-form/FeedbackApp";
import SlideshowApp from "./features/image-slideshow/SlideshowApp";
import TodoApp from "./features/todo-List/TodoApp";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-zinc-800">
      <div className="max-w-5xl mx-auto py-16 px-6">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            Component Integration Suite
          </h1>
          <p className="text-zinc-400 text-lg">
            Advanced Shadcn/UI Multi-App Interface
          </p>
        </header>

        <Tabs defaultValue="feedback" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-zinc-900 border border-zinc-800 p-1">
              <TabsTrigger value="feedback" className="px-8">
                Feedback
              </TabsTrigger>
              <TabsTrigger value="slideshow" className="px-8">
                Slideshow
              </TabsTrigger>
              <TabsTrigger value="todo" className="px-8">
                Todo List
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="feedback" className="focus-visible:outline-none">
            <FeedbackApp />
          </TabsContent>
          <TabsContent value="slideshow" className="focus-visible:outline-none">
            <SlideshowApp />
          </TabsContent>
          <TabsContent value="todo" className="focus-visible:outline-none">
            <TodoApp />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
