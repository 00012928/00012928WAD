using _00012928.Data;
using _00012928.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ContactManagerDbContext>(
    options => options.UseSqlServer(
        builder.Configuration.GetConnectionString("ContactManagerConnectionStr")));

// Used CORS to prevent CORS-related errors that might occur while fetching data from API
var allowedOrigins = "AnyOrigin";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: allowedOrigins, policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

builder.Services.AddScoped<IContactsRepository, ContactsRepository>();
builder.Services.AddScoped<ICategoriesRepository, CategoriesRepository>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.UseCors(allowedOrigins);
app.Run();
