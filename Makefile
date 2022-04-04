.PHONY: install start

install:
	@echo "Installing auth libraries..."
	@cd auth && npm install && cd ..
	@echo "Installing container libraries..."
	@cd container && npm install && cd ..
	@echo "Installing dashboard libraries..."
	@cd dashboard && npm install && cd ..
	@echo "Installing marketing libraries..."
	@cd marketing && npm install && cd ..
	@echo "All dependencies installed."


start:
	@echo "Starting servers..."
	@npm run dev