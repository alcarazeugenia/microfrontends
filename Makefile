.PHONY: install start

install:
	@echo "Installing auth libraries..."
	@npm install --prefix ./auth
	@echo "Installing container libraries..."
	@npm install --prefix ./container
	@echo "Installing dashboard libraries..."
	@npm install --prefix ./dashboard
	@echo "Installing marketing libraries..."
	@npm install --prefix ./marketing
	@echo "All dependencies installed."


start:
	@echo "Starting servers..."
	@npm run dev