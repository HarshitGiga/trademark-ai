import { GiArtificialIntelligence } from "react-icons/gi";

export const FeatureCard1 = () => {
  return (
    <div className="flex flex-col gap-4 bg-background rounded-xl p-8 -rotate-2 sticky top-0">
      <div className="text-3xl font-bold">AI-Powered Trademark Detection</div>
      <div className="text-lg">
      Go beyond basic keyword searches. Our AI scans the web for infringing trademarks with unmatched accuracy and efficiency.
      </div>
    </div>
  );
};

export const FeatureCard2 = () => {
  return (
    <div className="flex flex-col gap-4 bg-slate-100 rounded-xl p-8 rotate-2 sticky top-0">
      <div className="text-3xl font-bold">Comprehensive IP Issue Analysis</div>
      <div className="text-lg">
      Don't miss a thing. We provide a detailed breakdown of potential trademark violations, giving you the full picture for informed decisions.
      </div>
    </div>
  );
};

export const FeatureCard3 = () => {
    return (
      <div className="flex flex-col gap-4 bg-background rounded-xl p-8 -rotate-2 sticky top-0">
        <div className="text-3xl font-bold">Automated Violator Reporting</div>
        <div className="text-lg">
        Save time and resources. Our platform automatically generates reports on identified infringers, streamlining your workflow.
        </div>
      </div>
    );
  };


  export const FeatureCard4 = () => {
    return (
      <div className="flex flex-col gap-4 bg-slate-100 rounded-xl p-8 rotate-2">
        <div className="text-3xl font-bold">Customizable Alert System</div>
        <div className="text-lg">
        Stay on top of threats. Set up alerts to receive real-time notifications on potential trademark violations, ensuring you can take action quickly.
        </div>
      </div>
    );
  };