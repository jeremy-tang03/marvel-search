# Final Project

## Analysying performance

# No compression or caching

- The site takes a while to load for the first time in a new browser.
- In mobile lighthouse, the main metrics affecting performance were time to interactive (8.2s) and largest contentful paint (7.7s).
- In the network tab, a large amount of time is spent waitin for documents from the server (css, js, etc.)
- When throttling the network, images can somtimes take a while to appear.
- A search for "a" was about 35Kb in size. Images were 100kb in size.

# With compression and caching
- In mobile lighthouse, there wasn't a significant change in speeds.
- When making searches that have already been done previously, the performance is greatly incereased as some of the images and search results can be gotten from the disk instead of fetching them. Results of a search for "i" went from 500ms to 1ms.
- When getting an image from cache instead of fetching, the speed for getting images dropped to close to 1ms.
- The size of search results seems to have sayed about the same.

