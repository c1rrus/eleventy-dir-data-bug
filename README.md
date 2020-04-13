# Reduced test case for Eleventy directory data bug
While trying to use Eleventy's [directory specific data files](https://www.11ty.dev/docs/data-template-dir/) feature, I stumbled across what I think is a potential bug:

If your `.eleventy.js` config uses _absolute_ paths for the `input` and `output` directories, the directory specific data files are ignored. Furthermore, `.js` files in the global data directory don't seem to work either. As long as your `.elevent.js` config uses relative paths everything works as expected though.

As part of reporting this bug I have put together this repo as a reduced test case. Hopefully it will help the Eleventy developers (or a kind contributor) investigate this.

## Details
In the `src/` directory I have a very simple, 2 page website. There are global JavaScript and JSON data files. There is also a sub directory (`subdir/`) containing 1 page and directory specific JavaScript and JSON data files. The pages display the values from the various data files.

I also have 2 Eleventy configs - one using relative file paths, the other absolute file paths. Depending which config you use, you get different results (this was observed using Eleventy `v0.10.0`):

| Config                                   | Global JS data    | Global JSON data | Directory JS data | Directory JSON data |
|------------------------------------------|-------------------|------------------|-------------------|---------------------|
| `.eleventy.js` (relative paths)          | ✔                 | ✔               | ✔                 | ✔                  |
| `eleventy-abs-paths.js` (absolute paths) | ❌ (returns `{}`) | ✔               | ❌                | ❌                 |

## Running the test

To launch Eleventy's dev server using the working config you can do:

```
npm start
```

To launch it with the broken config do:

```
npm run start-broken
```