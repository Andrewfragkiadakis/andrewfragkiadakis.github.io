import http.server
import socketserver
import os # Import os module

# Define the port you want to use
PORT = 8000

# Create a custom handler
class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    # Override the extensions_map to ensure .js is served as application/javascript
    extensions_map = {
        '.manifest': 'text/cache-manifest',
	'.html': 'text/html',
        '.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.svg': 'image/svg+xml',
	'.css': 'text/css',
	'.js': 'application/javascript', # Ensure .js files are served correctly
        '.json': 'application/json',
	'.xml': 'application/xml',
        '.wasm': 'application/wasm', # If you ever use WebAssembly
	'': 'application/octet-stream', # Default for unknown types
    }

    def __init__(self, *args, **kwargs):
        # Serve files from the current working directory where the script is run
        super().__init__(*args, directory='.', **kwargs)

# Set up the server
socketserver.TCPServer.allow_reuse_address = True # Allow address reuse
with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
    # Get the current working directory for the print statement
    current_directory = os.getcwd()
    print(f"Serving HTTP on http://localhost:{PORT}/ from directory '{current_directory}'...") # Use os.getcwd()
    print("Mapping '.js' to 'application/javascript'")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
        httpd.shutdown()