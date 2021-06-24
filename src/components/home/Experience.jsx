import FadeInWhenVisible from '../Animation/FadeInWhenVisible';

function Box() {
    return (
      <div
        style={{
          padding: 40,
          background: "white",
          display: "inline-block",
          borderRadius: 5
        }}
      />
    );
  }


export default function Experience() {
    return (
      <div>
        <p style={{ color: "white", padding: 10 }}>Scroll down</p>
        <FadeInWhenVisible>
          <Box />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <Box />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <Box />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <Box />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <Box />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <Box />
        </FadeInWhenVisible>
      </div>
    );
  }