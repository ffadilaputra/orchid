import { useFirebase } from "@/lib/use-firebase";
import Heart from "heroicons/solid/heart.svg";
import Play from "heroicons/solid/play.svg";
import Photograph from "heroicons/solid/photograph.svg";
import styles from "@/css/glances.module.css";

export default function GlancePreview({ glance }) {
  return (
    <div className="pt-full h-0 relative overflow-hidden">
      <img
        src={glance.image}
        alt="Preview of Glance"
        loading="lazy"
        className="max-w-none absolute w-full h-full inset-0 object-cover object-center"
      />
      <TypeOverlay glance={glance} />
    </div>
  );
}

function HeartsOverlay({ glance }) {
  const [totalLikes, likesLoading] = useFirebase("glance-likes", glance.slug);

  return (
    <div
      className={`bg-black bg-opacity-50 absolute inset-0 w-full h-full flex ${styles.overlay}`}
    >
      <div className="m-auto text-white font-medium text-lg flex items-center"></div>
    </div>
  );
}

function TypeOverlay({ glance }) {
  return (
    <div className="top-0 right-0 absolute p-2">
      <TypeIcon glance={glance} />
    </div>
  );
}

function TypeIcon({ glance }) {
  const classList = "w-5 h-5 text-white fill-current opacity-75";

  if (glance.video) {
    return <Play className={classList} />;
  }

  return null;
}
