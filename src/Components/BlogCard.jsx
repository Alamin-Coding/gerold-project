/**
 * BlogCard
 *
 * Props:
 * - image     (string)  Cover image URL
 * - imageAlt  (string)  Alt text for the cover image
 * - badge     (string)  Pill label on the image, e.g. "Video" (optional)
 * - category  (string)  e.g. "Business"
 * - date      (string)  Pre-formatted date, e.g. "Nov 01, 2025"
 * - title     (string)  Post title (clamped to 2 lines)
 * - href      (string)  If set, the whole card becomes a link (optional)
 * - onClick   (func)    Click handler (optional)
 * - className (string)  Extra classes for the root element (optional)
 */

const BlogCard = ({
  image,
  imageAlt = "",
  badge,
  category,
  date,
  title,
  href,
  onClick,
  className = "",
}) => {
  const Root = href ? "a" : "article";

  const rootProps = href
    ? { href }
    : onClick
      ? { role: "button", tabIndex: 0 }
      : {};

  const handleKeyDown = (e) => {
    if (onClick && !href && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <Root
      {...rootProps}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={`group block w-full rounded-3xl border border-white/10 bg-[#0b0d12] p-4 text-left
        focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400
        ${href || onClick ? "cursor-pointer" : ""} ${className}`}
    >
      {/* Cover image */}
      <div className="relative aspect-[382/344] w-full overflow-hidden rounded-2xl bg-black">
        {image && (
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        )}

        {badge && (
          <span className="btn absolute left-4 top-4 rounded-full px-4 py-1.5 text-base font-medium leading-none text-white shadow-lg shadow-violet-900/40">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="px-4 pb-4 pt-8">
        <div className="flex items-center gap-3 text-base text-zinc-500">
          <span>{category}</span>
          <span aria-hidden="true">&bull;</span>
          <time>{date}</time>
        </div>

        <h3 className="mt-6 line-clamp-2 text-[24px] font-semibold uppercase leading-tight tracking-wide text-white">
          {title}
        </h3>
      </div>
    </Root>
  );
};

export default BlogCard;

/* ---------------------------------------------------------------
   Usage

   import BlogCard from "./BlogCard";

   <BlogCard
     image="/images/laptop.png"
     imageAlt="Laptop and mouse on a dark desk"
     badge="Video"
     category="Business"
     date="Nov 01, 2025"
     title="The role of technology in modern logistics"
     href="/blog/role-of-technology"
   />

   Grid example:

   <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
     {posts.map((post) => (
       <BlogCard key={post.id} {...post} />
     ))}
   </div>
---------------------------------------------------------------- */

