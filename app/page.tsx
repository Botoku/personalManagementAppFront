import Content from "@/components/sharedComponents/Content";
import Header from "@/components/sharedComponents/Header";
import Image from "next/image";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = auth();

  if (userId) redirect("/user");

  return (
    <main className=" min-h-screen w-full">
      <section className="mt-4">
        <h1>
          Welcome to LifeLens – your personal perspective into productivity and
          organization. Please sign in or sign up to use the app
        </h1>
        <div>
          <p>
            LifeLens is more than just an app; its your window into a more
            organized, efficient, and balanced life. With LifeLens, you can view
            your tasks, meals, expenses, shopping lists, and creative ideas
            through a focused and clear lens, helping you stay on track and
            achieve your goals with clarity and purpose.
          </p>
          <p>
            LifeLens is your personalized tool for optimizing every aspect of
            your life. See the bigger picture, focus on the details, and bring
            your goals into sharp focus with LifeLens.
          </p>

          <ul>
            <li>
              Gain Clarity: LifeLens provides you with a clear view of your
              daily tasks, upcoming events, and important deadlines, helping you
              prioritize and focus on what truly matters.
            </li>
            <li>
              Enhance Vision: With LifeLens, meal planning becomes a breeze.
              Visualize your weekly meals, create shopping lists with ease, and
              explore new culinary horizons with confidence.
            </li>
            <li>
              Sharpen Focus: Keep a sharp eye on your finances with LifeLens
              expense tracking feature. Gain insights into your spending habits,
              set budget goals, and make smarter financial decisions
              effortlessly.
            </li>
            <li>
              Expand Perspective: Never miss out on a great idea again. Capture
              your thoughts, inspirations, and creative sparks in LifeLens idea
              management tool, and watch your ideas grow and evolve over time.
            </li>
            <li>
              Zoom into Efficiency: Simplify your shopping experience with
              LifeLens intuitive shopping lists. Say goodbye to forgotten items
              and hello to streamlined shopping trips.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
